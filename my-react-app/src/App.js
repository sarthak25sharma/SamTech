
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/footer.jsx'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'
import About from './components/About/about.jsx'
import Infra from './components/Infra/infra.jsx'
import Product from './components/Product/product.jsx'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Hero/>
    <Routes>
        <Route path='/aboutus' exact element={<About/>}/>  
        <Route path='/infrastructure' element={<Infra/>}/>
        <Route path='/products' element={<Product/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App