import React from 'react'
import  {Link} from 'react-router-dom'
import './App.css';

export default function Nav() {
    return (
        <nav>
            <h3>My Navbar</h3>
            <ul className="navlinks">
                <Link style={{ textDecoration: 'none' }} to="/"><li>Home</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/account"><li>Account</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/help"><li>Help</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/form"><li>Form</li></Link>
            </ul>
        </nav>
    )
}
// nav-links