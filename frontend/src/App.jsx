import './App.css'
import LayOut from './LayOut/LayOut'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Screens/About'
import Brand from './Screens/Brand'
import Business from './Screens/Business'
import Contact from './Screens/Contact'
import Ecosystem from './Screens/Ecosystem'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecosysem" element={<Ecosystem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
