const misProductos = [
  {
    id: "1",
    artista: "The Prodigy",
    album: "The Fat Of The Land",
    precio: 14900,
    img: "../img/0001.jpg",
    idCat: "1",
  },
  {
    id: "2",
    artista: "Britney Spears",
    album: "Greatest Hits: My Prerogative",
    precio: 13900,
    img: "../img/0002.jpg",
    idCat: "1",
  },
  {
    id: "3",
    artista: "The White Stripes",
    album: "White Blood Cells",
    precio: 6900,
    img: "../img/0003.jpg",
    idCat: "1",
  },
  {
    id: "4",
    artista: "Elvis Presley",
    album: "Elvis & Friends",
    precio: 7900,
    img: "../img/0004.jpg",
    idCat: "1",
  },
  {
    id: "5",
    artista: "Tracy Chapman",
    album: "Greatest Hits",
    precio: 8900,
    img: "../img/0005.jpg",
    idCat: "1",
  },
  {
    id: "6",
    artista: "Villa Cariño",
    album: "15Añero",
    precio: 10900,
    img: "../img/0006.jpg",
    idCat: "1",
  },
  {
    id: "7",
    artista: "Depeche Mode",
    album: "Memento Mori",
    precio: 59900,
    img: "../img/0007.jpg",
    idCat: "2",
  },
  {
    id: "8",
    artista: "Korn",
    album: "Follow The Leader",
    precio: 42900,
    img: "../img/0008.jpg",
    idCat: "2",
  },
  {
    id: "9",
    artista: "Pedro Aznar",
    album: "Ahora",
    precio: 27900,
    img: "../img/0009.jpg",
    idCat: "2",
  },
  {
    id: "10",
    artista: "Los Jaivas",
    album: "La Ventana",
    precio: 29900,
    img: "../img/0010.jpg",
    idCat: "2",
  },
  {
    id: "11",
    artista: "Bjork",
    album: "Post",
    precio: 39900,
    img: "../img/0011.jpg",
    idCat: "2",
  },
  {
    id: "12",
    artista: "Guns N’ Roses",
    album: "Appetite For Destruction",
    precio: 34900,
    img: "../img/0012.jpg",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos);
    }, 100);
  });
};

export const getUnproducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    });
  }, 100);
};

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
