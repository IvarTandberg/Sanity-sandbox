
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import './App.css';
import Frontpage from './components/pages/Frontpage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './components/pages/ProductPage';
import CatagoriesPage from './components/pages/CatagoriesPage';
import CatagoryPage from './components/pages/CatagoryPage';

function App() {

  const [prods, setProds] = useState(null)

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  //console.log(prods)

  return (
    <Routes>
      <Route index element={<Frontpage products={prods} />} />
      <Route path=':slug' element={<ProductPage/>}/>

      <Route path="kategori">
        <Route index element={<CatagoriesPage />} />
        <Route path=":catagory" element={<CatagoryPage />} />
      </Route>

    </Routes>
  );
}

export default App;
