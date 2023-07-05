import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import "./NavBar.css"

const NavBar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="nav-elements">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/library">Library</NavLink>
                            </li>
                            <li>
                                <NavLink to="/feed">Social</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar