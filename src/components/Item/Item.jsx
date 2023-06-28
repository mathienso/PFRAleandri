import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, price, img, idCat }) => {
    return (
        <div className='cardProduct'>
            <img className='imgProduct' src={img} alt={name} />
            <div className='productInfo'>
                <h3>{name} </h3>
                <p>Precio: {price} </p>
                <p>ID: {id} </p>
            </div>
            <Link to={`../${idCat}/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item