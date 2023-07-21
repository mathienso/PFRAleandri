import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, amount }) => {
    const { delProduct } = useContext(CartContext);

    return (
        <div>
            <h4> {item.name} </h4>
            <p> Cantidad: {amount} </p>
            <p> Precio: {item.price}  </p>
            <button onClick={() => delProduct(item.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem