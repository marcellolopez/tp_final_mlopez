import {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { addDoc, doc, getDoc, updateDoc, collection } from 'firebase/firestore';
import "./Checkout.css";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Checkout = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [validated, setValidated] = useState(false);
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
        event.preventDefault();
        setError("")

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los mails no coinciden");
            return;
        }

        const order = {
            items: carrito.map(prod =>({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            fecha: new Date(),
            totalQuantity: cantidadTotal,
            totalAmount: total,
            buyer:{
            nombre,
            apellido,
            telefono,
            email
            }
        };
        console.log("enviado con exito")
        Promise.all(
            order.items.map(async (prod) => {
                const productoRef = doc(db,"inventario",prod.id);
                const productoDoc = await getDoc(productoRef);
                console.log(productoDoc)
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - prod.cantidad
                });
            })
        )
            .then(()=> {
                addDoc(collection(db,"orders"), {
                    fecha: new Date(),
                    totalQuantity: cantidadTotal,
                    totalAmount: total,
                    nombre,
                    apellido,
                    telefono,
                    email,
                })
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        vaciarCarrito();
                        setFormularioEnviado(true);
                    })
                    .catch((error) => {
                        console.log("Error al crear orden",error);
                        setError(error);
                    })
            })
            .catch( (error) => {
                console.log("Error al actualizar stock", error);
                setError("Error al actualizar el stock")
            })
        }


    return (
        <>
            <h2>Checkout</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group className="offset-4" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nombre </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre" 
                        onChange={(e) => setNombre(e.target.value)}
                        disabled={formularioEnviado}
                    />
                    <Form.Control.Feedback>¡Perfecto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="offset-4" as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                        onChange={(e) => setApellido(e.target.value) }
                        disabled={formularioEnviado}
                    />
                    <Form.Control.Feedback>¡Perfecto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="offset-4" as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" required onChange={(e) => setTelefono(e.target.value) } disabled={formularioEnviado}/>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese su número de teléfono
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="offset-4" as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" required  onChange={(e) => setEmail(e.target.value) } disabled={formularioEnviado} />
                    <Form.Control.Feedback type="invalid">
                        Porfavor ingrese un mail válido
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="offset-4" as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>Confirmacion Email</Form.Label>
                    <Form.Control type="text" placeholder="Confirmacion Email" required onChange={(e) => setEmailConfirmacion(e.target.value) } disabled={formularioEnviado}/>
                    <Form.Control.Feedback type="invalid">
                        Porfavor ingrese un mail válido
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="offset-4 col-md-4">
                    <Form.Check
                    required
                    label="Acepte los terminos y condiciones"
                    feedback="debe aceptar los terminos y condiciones"
                    feedbackType="invalid"
                    />
                </Form.Group >
                <Button className="offset-4 col-md-4" type="submit" disabled={formularioEnviado}>Enviar</Button>
                </Form>

            {
                error && <p className="offset-4 col-md-4" style={{ color: "red" }}> {error} </p>
            }

            {
                orderId && (
                    <strong className="offset-4 col-md-4">¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
                )
            }
        </>
    )
}

export default Checkout
