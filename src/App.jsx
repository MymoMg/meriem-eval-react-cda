import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';

function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
