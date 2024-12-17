import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/About";
import News from "./pages/News";

export default function App() {
  return (
    <div className="wrap">
      <Navbar/>
      <hr />
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<News />} path='/news'></Route>
      </Routes>
    </div>
  )
}