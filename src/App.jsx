import Home from "./components/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element=""/>
          </Routes>
      </BrowserRouter>
        
   
    </>
  )
}

export default App
