import { Request, Response } from "express";
import DeleteClient from "../../models/clients/deleteClient";

export async function DeleteClientController(req: Request, res: Response){
    try{
        const {id} = req.body
        const message =  await DeleteClient(id)
        res.status(200).send({
message: message
        })
    }catch(err){
        res.status(400).send({
            message: (err as Error).message
                    })
    }
}