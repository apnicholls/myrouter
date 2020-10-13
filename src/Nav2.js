import React from 'react'
import  {Link} from 'react-router-dom'
import './App.css';

export default function Nav2() {
    return (
        <div>
            <div><h4>React Todo List App</h4></div>
            <div className="topnav">
                <Link style={{ textDecoration: 'none' }} to="/tasklist"><li>Tasklist</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/about"><li>About</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/contact"><li>Contact</li></Link>
            </div>

       </div>
    )
}
