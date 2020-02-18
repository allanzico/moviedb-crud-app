import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand"> The Movie DB </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className={"nav-link"} to={"/"}> Public Route </Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;