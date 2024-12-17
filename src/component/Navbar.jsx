import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <ul class="menu">
                <li><Link to="/">HOME</Link>                </li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/news">                NEWS</Link></li>
                <li><a href="public\html\masonry.html">Mount Masonry</a></li>
                <li><a href="public\html\carousel.html">NEW Curry</a></li>
                <li><a href="public\html\cycle.html">Mount Cycle</a></li>
                </ul>
        </div>
    )
}