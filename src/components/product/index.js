import React from "react"
import { Link } from "react-router-dom"
import './product.css'

function Product(props) {
    return (
        <div>
            <div className="card container mt-4">
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text text-center">{props.description}</p>
                </div>
                <button className="btn btn-buy">Comprar</button>
                <Link to={`/info-product/${props.id}`} className="btn btn-warning mb-3">Detalhes</Link>
            </div>
        </div>
    )
}

export default Product