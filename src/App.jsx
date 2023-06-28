import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/:idCategory/:idItem' element = { <ItemDetailContainer/> } />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
