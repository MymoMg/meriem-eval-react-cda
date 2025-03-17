import './App.css'
import Navbar from './components/Navbar'
// import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer'
import Register from './pages/Register/Register'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      {/* <HomePage/> */}
      <Register/>
      <Footer />
    </div>
  )
}

export default App
