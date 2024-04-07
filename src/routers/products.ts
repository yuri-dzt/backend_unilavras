import express from "express"
import { CreateProductController } from "../controllers/products/createProductController"
import { GetAllProductsController } from "../controllers/products/getAllproductsController"
import { DeleteProductController } from "../controllers/products/deleteProductController"

const router = express.Router()

router.post('/poducts', CreateProductController)
router.get('/products', GetAllProductsController)
router.delete('/products/:id', DeleteProductController)

export default router