import { useEffect, useState } from "react"
import GetProductById from '../../services/product/infoProduct'

function InfoProduct(props) {
    const [data, setData] = useState({})
    
    useEffect((props) => {
        GetProductById(props.id, setData)
    }, [data])

    return (
        <>
            <div className="container">
                <div className="jumbrotron">
                    {
                        console.log(data)
                    }
                </div>
            </div>
        </>
    )
}

export default InfoProduct