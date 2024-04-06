import { Request, Response } from "express";
import { getAllClients } from "../../models/clients/getClients";

export async function getAllClientsController(req: Request, res: Response){
    try{
        const clients = await getAllClients()
        res.status(200).json(clients)
    }catch(err){
        throw new Error(`Erro ao pegar clientes: ${(err as Error).message}`)
    }
}