
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        </Routes>
        <Footer></Footer>
       
        
        
      </div>
    </>
  )
}

export default App
