
export default function Navbar(){
    return (
        <div>

            <ul class="menu">
                    {/* <li><a href="">VIDEO</a></li>
                <li><a href="">CONTACT</a></li> */}
                            <li><Link to="/">HOME</Link>
                </li>
                <li><Link to="/">NEWS</Link>
                </li>
                <li><Link to="/">SERVICE</Link></li>
                <li><Link to="/">ABOUT</Link></li>
            </ul>
        </div>
    )
}