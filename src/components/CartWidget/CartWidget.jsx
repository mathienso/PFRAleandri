import React from "react";
import './CartWidget.css';
import imgCart from "../../images/cart_small.png"; 

const CartWidget = () => {
    return (
        <div>
            <img className="imgCarrito" src={imgCart} alt="Carrito" />
            <strong>10</strong>
        </div>
    );
};

export default CartWidget;
