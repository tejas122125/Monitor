
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
function App() {

  return (
    <>
    <div className="w-screen h-screen">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<Dashboard/>} />


    </Routes>
    </div>
    </>
  )
}

export default App
