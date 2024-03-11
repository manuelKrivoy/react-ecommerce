export let products = [
  {
    id: 1,
    title: "Camiseta Local de Argentina - 2023",
    price: 50000,
    description: "Camiseta oficial local de la selección argentina de fútbol.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034458/ecommerce-react/Argentina2023.webp",
    stock: 20,
    category: "Selecciones",
  },
  {
    id: 2,
    title: "Camiseta Local de Boca Juniors - 2024",
    price: 45000,
    description: "Camiseta oficial local de Boca Juniors, marca Adidas.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034458/ecommerce-react/Boca2024.jpg",
    stock: 15,
    category: "Clubes",
  },
  {
    id: 3,
    title: "Camiseta Local de Brasil - 2023",
    price: 35000,
    description: "Camiseta oficial local de la selección brasileña de fútbol.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034462/ecommerce-react/brasil2023.png",
    stock: 25,
    category: "Selecciones",
  },
  {
    id: 4,
    title: "Camiseta Local de Real Madrid - 2024",
    price: 60000,
    description: "Camiseta oficial local del Real Madrid, marca Adidas",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034458/ecommerce-react/Realmadrid2024.avif",
    stock: 10,
    category: "Clubes",
  },
  {
    id: 5,
    title: "Camiseta visitante Real Madrid - 2024",
    price: 58000,
    description: "Camiseta visitante del Real Madrid, marca Adidas.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095240/ecommerce-react/real%20madrid%20visitante.jpg",
    stock: 70,
    category: "Clubes",
  },

  {
    id: 6,
    title: "Pulsera de Silicona Argentina",
    price: 2500,
    description: "Pulsera de silicona con los colores y la bandera argentina.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034788/ecommerce-react/pulseraArg.webp",
    stock: 50,
    category: "Accesorios",
  },
  {
    id: 7,
    title: "Bufanda de Boca Juniors",
    price: 8000,
    description: "Bufanda oficial de Boca Juniors, perfecta para los días de frío en la cancha.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708093662/ecommerce-react/bufandaBoca2.jpg",
    stock: 30,
    category: "Accesorios",
  },
  {
    id: 8,
    title: "Gorra de Brasil",
    price: 5000,
    description: "Gorra con los colores y el escudo de la selección brasileña de fútbol.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708034969/ecommerce-react/gorrabrasil.webp",
    stock: 50,
    category: "Accesorios",
  },
  {
    id: 9,
    title: "Gorra Real Madrid",
    price: 15000,
    description: "Gorra oficial del Real Madrid, ideal para lucir en los partidos.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708093815/ecommerce-react/gorraRealMadrid2.png",
    stock: 20,
    category: "Accesorios",
  },
  {
    id: 10,
    title: "Bufanda Manchester United",
    price: 9000,
    description: "Bufanda oficial del Manchester United para mantenerte abrigado en los encuentros.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708554723/ecommerce-react/bufandaMU.jpg",
    stock: 25,
    category: "Accesorios",
  },
  {
    id: 11,
    title: "Bufanda Manchester City",
    price: 8500,
    description: "Bufanda oficial del Manchester City para mantenerte abrigado en los encuentros.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/bufanda%20city.webp",
    stock: 25,
    category: "Accesorios",
  },
  {
    id: 12,
    title: "Camiseta Local de River Plate - 2023",
    price: 55000,
    description: "Camiseta oficial Local de River Plate, temporada 2023.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/river.jpg",
    stock: 20,
    category: "Clubes",
  },
  {
    id: 13,
    title: "Camiseta Local de Rosario Central - 2024",
    price: 42000,
    description: "Camiseta oficial local de Rosario Central, temporada 2024.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/central.webp",
    stock: 15,
    category: "Clubes",
  },
  {
    id: 14,
    title: "Bufanda Barcelona",
    price: 8500,
    description: "Bufanda oficial del Barcelona FC para mantenerte abrigado en los encuentros.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/bufanda%20barcelona.webp",
    stock: 25,
    category: "Accesorios",
  },
  {
    id: 15,
    title: "Gorra de Boca Juniors",
    price: 5000,
    description: "Gorra con los colores y el escudo de Boca Juniors.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/gorraboca.png",
    stock: 50,
    category: "Accesorios",
  },
  {
    id: 16,
    title: "Camiseta Local de Liverpool - 2024",
    price: 55000,
    description: "Camiseta oficial local del Liverpool FC, temporada 2024.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095238/ecommerce-react/liverpool.webp",
    stock: 15,
    category: "Clubes",
  },
  {
    id: 17,
    title: "Camiseta Local Italia - 2024",
    price: 50000,
    description: "Camiseta oficial de la selección italiana de fútbol, temporada 2024.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095241/ecommerce-react/italia.jpg",
    stock: 50,
    category: "Selecciones",
  },

  {
    id: 19,
    title: "Camiseta Local Francia - 2024",
    price: 48000,
    description: "Camiseta oficial local de la selección francesa de fútbol, temporada 2024.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095245/ecommerce-react/francia.png",
    stock: 25,
    category: "Selecciones",
  },
  {
    id: 20,
    title: "Camiseta Local de Paris Saint-Germain - 2024",
    price: 55000,
    description: "Camiseta oficial local del Paris Saint-Germain, temporada 2024.",
    img: "https://res.cloudinary.com/drzbbyfbt/image/upload/v1708095239/ecommerce-react/psg.jpg",
    stock: 15,
    category: "Clubes",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000); //Simulamos demora para parecer q trabajamos con una bdd
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("El id :", id, " no existe");
        }
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};
