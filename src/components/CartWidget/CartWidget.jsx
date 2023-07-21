import './CartWidget.css';
import imgCart from "../../images/cart_small.png";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalAmount} = useContext(CartContext);
    return (
        <div>
            <Link to={"/cart"}>
                <img className="imgCarrito" src={imgCart} alt="Carrito" />
                {
                    totalAmount > 0 && <strong>{totalAmount}</strong>
                }
            </Link>
        </div>
    );
};

export default CartWidget;
