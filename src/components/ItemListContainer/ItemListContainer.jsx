import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
      const functionProducts = idCategory ? getProductsByCategory : getProducts;

      functionProducts(idCategory)
          .then(res => setProducts(res))
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