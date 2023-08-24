import React from 'react'
import { useState } from 'react';
import "./ItemCount.css";


const ItemCount = ({inicial, stock, funcionAgregar}) => {
    inicial = 1;
    const [contador, setContador] = useState(inicial);
    
    const incrementar = () => {
        if(contador < stock) {
            setContador(contador +1);
        }
    }

    const decrementar = () =>{
        if (contador>inicial) {
            setContador(contador - 1 );
        }
    }
    return (
        <>
            <div className='contador'>
                <button className='boton'  onClick={decrementar}> -</button>
                <p> {contador} </p>
                <button className='boton'  onClick={incrementar}> +</button>
            </div>
            <button className='boton'  onClick={() => funcionAgregar(contador)}> Agregar al Carrito</button>
        
        </>
    )
}

export default ItemCount




