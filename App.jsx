
import Navbar from './Navbar.jsx'
import './App.css'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import { BrowserRouter as Router,Route , Switch } from 'react-router-dom'
import About from './about.jsx'
import Infra from './infra.jsx'
import Product from './product.jsx'


function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Hero/>
    <Switch>
        <Route path='/aboutus' exact>  
          <About/>
        </Route>
        <Route path='/infrastructure'>
          <Infra/>
        </Route>
        <Route path='/products'>
          <Product/>
        </Route>
    </Switch>
    <Footer/>
    </Router>
    </>
  )
}

export default App
