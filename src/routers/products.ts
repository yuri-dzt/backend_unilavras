import express from "express"
import { CreateProductController } from "../controllers/products/createProductController"
import { GetAllProductsController } from "../controllers/products/getAllproductsController"

const router = express.Router()

router.post('/poducts', CreateProductController)
router.get('/products', GetAllProductsController)

export default router