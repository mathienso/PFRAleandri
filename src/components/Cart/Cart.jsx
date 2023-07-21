import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, cleanCart, total, totalAmount} = useContext(CartContext);

    if(totalAmount === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }
    return (
        <div>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {totalAmount}</h3>
            <button onClick={()=>cleanCart()}>Vaciar Carrito</button>
            <Link to={"/checkout"}>Finalizar Compra</Link>
        </div>
    )
}

export default Cart