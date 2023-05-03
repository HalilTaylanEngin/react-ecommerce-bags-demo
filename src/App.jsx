import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import NoPage from './pages/NoPage/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:id'  element={<Product />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
