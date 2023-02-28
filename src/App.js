import { useState } from "react"
import {Route, Routes} from "react-router-dom"
import Footer from './components/common/footer.js'
import Header from './components/common/header'
import Nav from './components/common/nav'
import About from './components/pages/about'
import Home from './components/pages/home'
import Newsletter from './components/pages/newsletter'
import ProductList from './components/products/productList'
import Product from './components/products/product'

import lamps from './data/lamps.json'
import candles from './data/candles.json'


function App() {

  const [productType, setProductType] = useState([])

  return (
    <div className="App">
      <Header />
      
      <div className="wrapper">
      <Nav lamps={lamps} candles={candles}/>
{/* <Route if matches path="" then give me this element={} */}
      <main>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/newsletter" element={<Newsletter />}/>

          <Route 
          path="/lamps"
          element={<ProductList products={lamps} type={'Lamps'}/>}
          />

          <Route 
          path="/candles"
          element={<ProductList products={candles} type={'Candles'}/>}
          />

          <Route
          path="/lamps/:id"
          element={<Product products={lamps} type={'Lamps'}/>}
          />

          <Route
          path="/candles/:id"
          element={<Product products={candles} type={'Candles'}/>}
          />

          
      

        </Routes>
      </main>
    </div>

    <Footer />


    </div>
  );
}

export default App;
