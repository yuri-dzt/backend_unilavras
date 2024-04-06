import { Request, Response } from "express";
import CreateProduct from "../../models/products/createProduct";

export async function CreateProductController(req: Request, res: Response){
    try{
        const {name, description, price, updateDate} = req.body
        const response = await CreateProduct({name, description, price, updateDate})
        res.status(200).json({
            message: response
        })
    }catch(err){
        res.status(400).json({
            message: (err as Error).message
        })
    }
}