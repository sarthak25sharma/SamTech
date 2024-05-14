
import Navbar from './Navbar.jsx'
import './App.css'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'
import About from './about.jsx'
import Infra from './infra.jsx'
import Product from './product.jsx'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Hero/>
    <Routes>
        <Route path='/aboutus'>  
          <About/>
        </Route>
        <Route path='/infrastructure'>
          <Infra/>
        </Route>
        <Route path='/products'>
          <Product/>
        </Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
