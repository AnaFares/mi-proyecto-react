import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Producto from './components/Producto'

function App() {


  return (
    //Definir las rutas
    <BrowserRouter>

      {/* - Bloque estatico o comun - */}
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <NavLink to='/' className='nav-link' > Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link'> About </NavLink>
          </li>
        </ul>
      </nav>

      {/* - Bloque Dinamico - */}
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/producto/:nombreParam' element={<Producto></Producto>}></Route>
        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App
