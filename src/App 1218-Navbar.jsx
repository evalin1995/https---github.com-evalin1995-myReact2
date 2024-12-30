import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/About";
import News from "./pages/News";
import Login from "./pages/login";
import User from "./pages/User";

export default function App() {
  return (
    <div className="wrap">
      <Navbar/>
      <hr />
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<News />} path='/news'></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/user' element={<User/>}></Route>

      </Routes>
    </div>
  )
}