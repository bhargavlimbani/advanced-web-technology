import React, {useEffect} from 'react'
const cors = require('cors')

app.use (cors())
const ProductList = () => {
    const fetchData = async () => {
        const data = await axios.get('https://zenquotes.io/api/quotes');
        console.log(data);  

    }
    useEffect(() => {
        return () => {
        <div>hi</div>
        }
    })
}
export default ProductList