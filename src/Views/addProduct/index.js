import React, { useState } from "react"
import Navbar from '../../components/navbar/index'
import AddProduct from '../../services/product/addProduct'
import { Link } from 'react-router-dom'

export default function NewProduct() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const product = {
        name: name,
        description: description
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mx-auto">
                <input onChange={((e) => setName(e.target.value))} type="text" className="form-control mt-5 mb-5" placeholder="Nome do Produto" />
                <input onChange={((e) => setDescription(e.target.value))} className="form-control" placeholder="Descrição do produto" type="text" />
                
                </div>
                <Link to="/" className="btn btn-primary mt-5 form-control text-center" onClick={() => AddProduct(product)}>Adicionar novo produto</Link>
            </div>
        </>
    )
}