import React from 'react';
import { Link } from 'gatsby'; 

export default function Nav() {
    return <nav> 
        <ul>
            <li>
                <Link to="/">Hot Now</Link>
            </li>
            <li>
                <Link to="/pizzas/">Pizza Menu</Link>
            </li>
            <li>
                <Link to="/">Logo</Link>
            </li>
            <li>
                <Link to="/slicemasters/">slicemasters</Link>
            </li>
            <li>
                <Link to="/order/">order ahead</Link>
            </li>
        </ul>
    </nav>

}