import { Request, Response } from "express";
import ChangeClient from "../../models/clients/changeClient";

export async function ChangeCLientController(req: Request, res:Response){
    try{
        const {clientId, clientInfos: {name, lastName, age} } = req.body
        const response = await ChangeClient(clientId, {name, lastName, age})
        res.status(200).json({
            message: response
        })
    }catch(err){
        res.status(400).json({
            message: (err as Error).message
        })
    }
}