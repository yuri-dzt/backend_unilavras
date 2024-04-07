import { Request, Response } from "express";
import { getAllClientsModel } from "../../models/clients/getClientsModel";

export async function getAllClientsController(req: Request, res: Response){
    try{
        const clients = await getAllClientsModel()
        res.status(200).json(clients)
    }catch(err){
        throw new Error(`Erro ao pegar clientes: ${(err as Error).message}`)
    }
}