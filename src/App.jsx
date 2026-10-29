import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './Pages/Categories.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contacts from './Pages/Contacts.jsx';
import Products from './Pages/Products.jsx';
import Login from './Pages/Login.jsx';

function App() {
  return (
   
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </Router>
    </>
    
  )
}

export default App