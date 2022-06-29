import React from "react"
import { Link } from "react-router-dom"
import './product.css'

function Product({name, description, id}) {
    return (
        <div>
            <div className="card container mt-4">
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">{description}</p>
                </div>
                <button className="btn btn-buy">Comprar</button>
                <Link to={`/info-product/` + id} className="btn btn-warning mb-3">Detalhes</Link>
            </div>
        </div>
    )
}

export default Product