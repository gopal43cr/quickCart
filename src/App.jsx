import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicExample from './BasicExp'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegBasicExample from './RegBasicExp'
import ShopForm from './ShopForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <>
      {/* Navigation */}
    

      {/* Routes */}
      <Routes>
      {/* <Route path="/" exact render={() => <div>Home Page</div>} /> */}
      <Route path="/" element={<BasicExample/>} />
      <Route path="/signup" element={<RegBasicExample/>} />
      <Route path='/addShop' element={<ShopForm/>}/>

      </Routes>
      {/* <Route path="/registration" component={Registration} /> */}
    </>
  </Router>
  )
}

export default App
