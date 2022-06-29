import React, { useEffect, useState } from 'react';
import Product from "../../components/product";
import GetProducts from '../../services/product/listProduct'
import Navbar from '../../components/navbar/index'

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        GetProducts(setData)
    }, [data])

    return (
        <>
            <Navbar />
            <div className="col-12">
                <div className="row">
                    {data.map(product => (
                        <div key={product.id} className="col-3">
                            <Product name={product.name} description={product.description} id={product.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
