import { type Request, type Response } from 'express'
import GetAllProductsModel from '../../models/products/getAllProductsModel'

export async function GetAllProductsController (req: Request, res: Response) {
  try {
    const products = await GetAllProductsModel()
    res.status(200).json(products)
  } catch (err) {
    res.status(400).json({
      message: (err as Error).message
    })
  }
}
