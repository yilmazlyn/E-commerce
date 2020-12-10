// import express from 'express'
// const router = express.Router()
// import {
//   getProductById,
//   getProducts,
// } from '../controllers/productController.js'

// router.route('/').get(getProducts)

// router.route('/:id').get(getProductById)

// export default router

import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router
