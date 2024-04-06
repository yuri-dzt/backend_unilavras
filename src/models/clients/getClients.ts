import connection from "../../configs/database"
import { clientProps } from "./createClient"


export const getAllClients = async ()=> {
    try{
        const clients: clientProps[] | null = await new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM clientes', (err, rows)=>{
                if(err){
                    reject(err)
                    return
                }
        
                if (rows.length === 0){
                    resolve(null)
                    return
                }
        
                const clients: clientProps[] = rows.map((row: any) => ({
                    id: row.id,
                    name: row.nome,
                    lastname: row.sobrenome,
                    email: row.email,
                    age: row.idade,
                    photo: row.foto,
                }));
    
                resolve(clients)
            })
    
            
        })
        return clients
    }catch(err){
        throw new Error(`Erro: ${err}`)
    }
}