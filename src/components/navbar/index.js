import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div className="d-flex">
            <nav className="nav navbar ">
                <li className="nav-item"><Link to="/" className="nav-link font-weight-bold text-danger h5">Home</Link></li>
                <li className="nav-item"><Link to="/new-product" className="nav-link font-weight-bold text-danger h5">adicionar produtos</Link></li>

            </nav>
        </div>
    )
}