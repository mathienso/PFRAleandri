import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const { cart, cleanCart, total } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    //Funciones y validaciones: 

    const manejadorFormulario = (e) => {
        e.preventDefault();

        //Verificamos que los campos esten completos: 
        if (!name || !lastname || !phone || !email || !emailConfirmation) {
            setError("Por favor complete todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan: 
        if (email !== emailConfirmation) {
            setError("Los campos del email no coinciden, maldito seas!!");
            return;
        }

        //Paso 1: Creamos el objeto de la orden. 
        const orden = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                amount: product.amount
            })),
            total: total,
            name,
            lastname,
            phone,
            email,
            fecha: new Date()
        };

        //Vamos a modificar el código para que ejecute varias promesas en parelelo, por un lado quiero que actualice el stock de products y por otro lado quiero que genere una orden de compra. Promise.All me permite todo esto. 

        Promise.all(
            orden.items.map(async (productOrden) => {
                const productRef = doc(db, "inventory", productOrden.id);
                //Por cada product en la coleecion "inventory" obtengo una referencia.
                const productDoc = await getDoc(productRef);
                const stockActual = productDoc.data().stock;
                //Data me permite acceder a la información del documento. 

                await updateDoc(productRef, {
                    stock: stockActual - productOrden.amount
                });
                //Modifico el stock y subo la información actualizada. 
            })
        )
            .then(() => {
                //Guardamos la orden en la base de datos: 
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        cleanCart();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden, vuelva más tarde");
                    })
            })
            .catch((error) => {
                console.log("Error al actualizar el stock. Dedicate a otra cosa", error);
                setError("Error al actualizar el stock. Intente nuevamente");
            })

    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario} className="formulario">
                {cart.map(product => (
                    <div key={product.id}>
                        <p>
                            {product.item.name} x {product.amount}
                        </p>
                        <p>Precio $ {product.item.price} </p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit"> Finalizar Compra </button>
            </form>
            {
                orderId && (
                    <strong className="ordenId">¡Gracias por tu compra! Tu número de orden es {orderId} </strong>
                )
            }


        </div>
    )
}

export default Checkout