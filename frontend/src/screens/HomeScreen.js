import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  //As soon as we reach on this page, useEffect will be fired, so, fetch datas from db will be fired when we reach on this page
  //useEffect is getting arrow function with async function, so the page waits axios fetching to load the homescreen
  //
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      {/* Loop through products in homescreen */}

      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
