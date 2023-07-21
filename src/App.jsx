import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error404/Error404';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/:idCategory/:idItem' element = { <ItemDetailContainer/> } />
            <Route path='/cart' element = { <Cart/> } />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
