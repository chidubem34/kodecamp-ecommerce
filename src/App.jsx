import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/kodecamp-ecommerce/' element={<Home />} />
          <Route path='/kodecamp-ecommerce/products/:id' element={<ProductDetails />} />
          <Route path='/kodecamp-ecommerce/Login' element={<Login />} />
          <Route path='/kodecamp-ecommerce/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App 