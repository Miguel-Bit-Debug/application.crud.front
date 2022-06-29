import React, { useEffect, useState } from 'react'
import api from '../../config/api'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Product from '../../components/product'

function InfoProduct() {
    const [data, setData] = useState({})

    let { id } = useParams()

    function GetProduct() {
        api.get(`${id}`)
            .then((response) => {
                setData(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetProduct()
    })

    return (
        <>
            <Navbar />
            <Product name={data.name} description={data.description} id={data.id} />
        </>
    )
}

export default InfoProduct