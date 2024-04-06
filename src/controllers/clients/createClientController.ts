import {Request, Response} from 'express'
import { createClient } from '../../models/clients/createClient'

export async function createClientController(req: Request, res: Response){
    try{
        const {nome, sobrenome, email, idade, foto} = req.body

        if(!nome || !email || !idade){
            return res.status(400).send({
                message: 'Os campos nome, email e idade são obrigatórios'
            })
        }

        await createClient({name: nome, lastname: sobrenome, email: email, age: idade, photo: foto})
        res.status(201).send('Cliente criado com sucesso!');
    }catch(err){
        console.error('Erro ao criar cliente:', err);
        res.status(500).send('Erro ao criar cliente: ' + (err as Error).message);
    }
}