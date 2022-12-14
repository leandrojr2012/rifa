import { db } from "../../_database/bd.js";

export async function ReservarRifaNum(rifa_numero_cliente_id, rifa_numero_rifa_id, rifa_numero_num){
    return new Promise (async(resolve, reject) => {

        const qntNumeroMax = await db('rifa').where({rifa_id:rifa_numero_rifa_id});
        const qntNumeroMaxFinal = qntNumeroMax[0].rifa_qnt_numero

        if(rifa_numero_num > qntNumeroMaxFinal){
            reject('Numero Inexistente!')
        }
        else{   
            db.insert({rifa_numero_rifa_id, rifa_numero_num, rifa_numero_cliente_id}).into("rifa_numero")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}