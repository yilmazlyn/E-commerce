const express = require('express')
const products = require('./data/products')

//Initialize express
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

//Get all products
//json response on demande for products object
//Go to localhost:5000/api/products to see json data of products objects
//Frontend fetches datas from this routes
app.get('/api/products', (req, res) => {
  res.json(products)
})

//Get a single product
//json response on demande for products object
//Go to localhost:5000/api/products/:id to see json data of product object
//Frontend fetches datas from this routes
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))
