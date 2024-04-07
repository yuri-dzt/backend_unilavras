import { Request, Response } from "express";
import DeleteProductUseCase from "../../models/products/deleteProduct";


export async function DeleteProductController(req: Request, res: Response){
    try{
        const {id} = req.params
        const response = await DeleteProductUseCase(id)
        res.status(200).json({
            message: response
        })
    }catch(err){
        res.status(400).json({
            message: (err as Error).message
        })
    }
}