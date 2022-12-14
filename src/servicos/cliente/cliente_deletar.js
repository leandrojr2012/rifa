import { db } from "../../_database/bd.js";

export async function DeletarCliente(cliente_id){
    return new Promise(async(resolve, reject) =>{
        db('cliente')
        .where({
            cliente_id: cliente_id
        }).del()
        .then (data =>{
            resolve()
        }).catch(err => {
            console.log(err)
        })
    })
}