
import Navbar from './Navbar.jsx'
import './App.css'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'
import ProductSection from './product_page.jsx'
import About from './about.jsx'
import InfraPage from './infra_page.jsx'
import Product from './product.jsx'
import Infra from './infra.jsx'
import Cover from './cover.jsx'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Hero/>
    <Routes>
        <Route path='/Home'   element={[
          <Cover key='Cover'/>,
          <Product key="Product" />,
          <Infra key="Infra" />,]}/>  
        <Route path='/aboutus' element={<About/>}/>  
        <Route path='/infrastructure' element={<InfraPage/>}/>
        <Route path='/products' element={<ProductSection/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
