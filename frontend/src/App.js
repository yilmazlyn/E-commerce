import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen.js'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen.js'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          {/* ? operator is to say that, id is optional, means that, cart page accessible by id or without */}
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/admin/userlist' component={UserListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
