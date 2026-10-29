import './CSS/Header.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header className="topbar">
            <div className="container nav">
                <div className="brand">
                    <img src="/Logo.png" alt="Urbreathe logo" className="brand-logo" />
                    <span>Urbreathe</span>
                </div>

                <nav aria-label="Main navigation">
                    <ul className="nav-links">
                        <li><NavLink to="/home" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>Home</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>Products</NavLink></li>
                        <li><NavLink to="/categories" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>Categories</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>Contact</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>About</NavLink></li>
                        <li className='pages'><input type="text" className="search" placeholder="Search" aria-label="Search" /></li>
                         <li><NavLink to="/login" className={({ isActive }) => `navlink ${isActive ? 'active' : ""}`}>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header