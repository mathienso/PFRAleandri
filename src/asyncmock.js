const products = [
    { name: "Air Jordan 1 Low Black Active Fuchsia", price: 500, id: "Air-Jordan-1-Low-Black-Active-Fuchsia", stock: 10, img: "../img/Air-Jordan-1-Low-Black-Active-Fuchsia-433x433.jpg", idCat: "sneakers" },
    { name: "Air Jordan 1 Low Black Guava Ice W", price: 440, id: "Air-Jordan-1-Low-Black-Guava-Ice-W", stock: 10, img: "../img/Air-Jordan-1-Low-Black-Guava-Ice-W-433x433.jpg", idCat: "sneakers" },
    { name: "Kit de limpieza Shoter", price: 5, id: "cleaner-shoter-kit", stock: 10, img: "../img/cleaner-shoter-kit.png", idCat: "cordones" },
    { name: "Cordones Shoter Aqua", price: 15, id: "lace-shoter-aqua", stock: 10, img: "../img/lace-shoter-aqua.png", idCat: "limpieza" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.idCat === idCategory)
            resolve(productsCategory);
        }, 100)
    })
}