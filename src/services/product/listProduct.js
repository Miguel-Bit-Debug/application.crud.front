import axios from 'axios'

async function GetProducts(setData) {
    await axios.get('http://localhost:5000/')
        .then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
}

export default GetProducts