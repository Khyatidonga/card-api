import React from 'react'
import App from '../App'

const Navbar = ({setCategory}) => {
    return (
        <div>
<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <h3></h3>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" onClick={() => setCategory("business")}>Business</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" onClick={() => setCategory("health")}>Health</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                    </li>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
