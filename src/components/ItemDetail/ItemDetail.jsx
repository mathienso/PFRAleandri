import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img, stock }) => {
    const [addAmount, setAddAmount] = useState(0);
    const {addProduct} = useContext(CartContext);
    const handlerAmount = (amount) => {
        setAddAmount(amount);
        const item = {id, name, price};
        addProduct(item, amount);
    }

    return (
        <div className='itemContainer'>
            <h2>Nombre: {name} </h2>
            <h3>Precio: {price} </h3>
            <h3>ID: {id} </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
            <img src={img} alt={name} />
            {
                addAmount > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount initial={1} stock={stock} add={handlerAmount}/>)
            }
        </div>
    )
}

export default ItemDetail