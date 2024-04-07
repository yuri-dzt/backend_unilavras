import { type Request, type Response } from 'express'
import DeleteClientModel from '../../models/clients/deleteClientModel'

export async function DeleteClientController (req: Request, res: Response) {
  try {
    const { id } = req.params
    const message = await DeleteClientModel(id)
    res.status(200).send({
      message
    })
  } catch (err) {
    res.status(400).send({
      message: (err as Error).message
    })
  }
}
