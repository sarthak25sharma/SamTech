
import Navbar from './Navbar.jsx'
import './App.css'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'
import About from './about.jsx'
import Infra from './infra.jsx'
import Product from './product.jsx'
import InfraPage from './infra_page.jsx'
import { AnimatePresence } from 'framer-motion';


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <AnimatePresence mode="wait">
    <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Hero/>}/>
        <Route path='/quality' element={<About/>}/>  
        <Route path='/infrastructure' element={<InfraPage/>}/>
        <Route path='/products' element={<Product/>}/>
    </Routes>
    </AnimatePresence>
    <Footer/>
    </Router>
    </>
  )
}

export default App
