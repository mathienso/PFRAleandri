import { useState, useEffect } from "react";
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config.js";

const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect( ()=> {

        const prods = query(collection(db, "inventory"))

        getDocs(prods)
            .then(response => {
                setProducts(response.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
    },[products])

    const decreaseStock = async(product) => {
        const productRef = doc(db,"inventory",product.id);
        const newStock = product.stock - 1;

        await updateDoc(productRef, {stock: newStock});
    }

  return (
    <>
        <h2>Productos</h2>
        <div className="products-container">
            {
                products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h2> {product.name} </h2>
                        <p> Precio: $ {product.price} </p>
                        <p> Stock: {product.stock} </p>
                        <button onClick={() => decreaseStock(product)}> Comprar </button>
                    </div>
                ))
            }

        </div>

    </>
  )
}

export default Products