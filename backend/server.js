import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

//Initialize dotenv
dotenv.config()

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

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
