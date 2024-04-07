import connection from "../../configs/database";
import { ProductProps } from "./createProductModel";

export default async function GetAllProductsModel(){
    try{
        const Products: ProductProps[] | null = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM produtos`, (err, rows)=>{
                if(err){
                    reject(err)
                    return
                }

                if (rows.length === 0){
                    resolve(null)
                    return
                }

                const products: ProductProps[] = rows.map((row: any) => (
                    {
                        id: row.id,
                        name: row.nome,
                        description: row.descricao,
                        price: row.preco,
                        updateDate: row.data_atualizacao
                    }
                ))

                resolve(products)
        
            })
        })

        return Products
    }catch(err){

    }
}