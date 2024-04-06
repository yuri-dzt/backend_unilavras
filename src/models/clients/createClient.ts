import connection from "../../configs/database"

export interface clientProps{
    id?: string
    name: string
    lastname: string
    email: string
    age: number
    photo?: string
}

export async function createClient(client:clientProps ){
   
   const clientAlreadyExists: clientProps | null = await new Promise((resolve, reject)=>{
    connection.query('SELECT * FROM clientes WHERE email = ?', [client.email], (err, rows)=>{
        if(err){
            reject(err)
            return
        }

        if (rows.length === 0){
            resolve(null)
            return
        }

        resolve({
            id: rows[0].id,
            name: rows[0].nome,
            lastname: rows[0].sobrenome,
            email: rows[0].email,
            age: rows[0].idade,
            photo: rows[0].foto,
        })
    })

})
if(clientAlreadyExists) throw new Error(`cliente já existe, client id: ${clientAlreadyExists.id}`)
    try{
         connection.query(`
        INSERT INTO clientes (nome, sobrenome, email, idade, foto)
            VALUES (?, ?, ?, ?, ?)
        `, [client.name, client.lastname, client.email, client.age, client.photo])

        console.log('novo cliente criado com sucesso!')
    }catch(err){
        throw new Error(`${err}`);
    }
}