import axios from 'axios'

function AddProduct(product) {
    axios.post('http://localhost:5000/', product)
        .then()
        .catch((err) => {
            console.log(err)
        })
}

export default AddProduct