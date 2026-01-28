
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Navigation from "./components/Navigation"
import routes from './utils/routes'
function App() {
  return (
    <>
   <div className='App'>
   
       <Navigation/>
      <Routes>
        <Route path = {routes.Home} element = {<Home/>}></Route>
        <Route path = {routes.About} element = {<About/>}></Route>
        <Route path = {routes.Contact} element = {<Contact/>}></Route>
      </Routes>
  
   </div>
   </>
  )
}

export default App
