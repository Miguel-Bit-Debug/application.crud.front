import axios from "axios"

async function GetProductById(id) {
    await axios.get(`http://localhost:5000/${id}`)
    .then((response) => {
        }).catch((err) => {
            console.log(err)
        })
}

export default GetProductById