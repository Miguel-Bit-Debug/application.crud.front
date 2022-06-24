import axios from 'axios'

function AddProduct() {
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((res) => {
            //
        }).catch((err) => {
            console.log(err)
        })
}

export default AddProduct