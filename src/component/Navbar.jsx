import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <ul className="menu">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/news">                NEWS</Link></li>
                <li><a href="./html/masonry.html" target="_blank">Mount Masonry</a></li>
                <li><a href="./html/carousel.html" target="_blank">NEW Curry</a></li>
                <li><a href="./html/cycle.html" target="_blank">Mount Cycle</a></li>
                <li><Link to="/login">登入</Link></li>
                <li><Link to="/user">使用者使用者資料</Link></li>


            </ul>
        </div>
    )
}