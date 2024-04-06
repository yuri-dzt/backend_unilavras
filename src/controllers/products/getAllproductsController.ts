import { Request, Response } from "express";
import GetAllProductsUseCase from "../../models/products/getAllProducts";

export async function GetAllProductsController(req: Request, res: Response){
    try{
        const products = await GetAllProductsUseCase()
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({
            message: (err as Error).message
        })
    }
}