import connection from "../../configs/database";

export interface ProductProps{
    id?: number,
    name: string,
    description?: string,
    price: number,
    updateDate?: string,
}

export default async function CreateProductModel(product: ProductProps ){
    try{
        const data = new Date().toISOString().slice(0, 19).replace('T', ' ')
        connection.query(`
        INSERT INTO produtos (nome, descricao, preco, data_atualizado)
            VALUES ('${product.name}', '${product.description}', ${product.price}, '${data}')
        `)
        return "Produto criado com sucesso"
    }catch(err){
        throw new Error(`Erro ao registrar produto. Erro: ${( err as Error).message}`)
    }
}

