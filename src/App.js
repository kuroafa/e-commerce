import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails'
import Sidebar from './components/Sidebar';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
