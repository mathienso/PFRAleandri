import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect( () => {
        const prods = idCategory ? query(collection(db, "inventory"),where("idCat", "==", idCategory)) : collection(db, "inventory");

        getDocs(prods)
            .then( res => {
                const newProds = res.docs.map( doc => {
                    const data = doc.data();
                    return {id: doc.id, ...data}
                })
                setProducts(newProds);
            })
            .catch(error => console.log(error))
    }, [idCategory])
    return (
        <>
            <h2> Productos </h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer