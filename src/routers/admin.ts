import express from 'express'
import { login } from '../controllers/admin/login'

const router = express.Router()

router.post('/', login)

export default router
