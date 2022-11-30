import {db} from "../../_database/bd.js"

export async function StatusPausar(rifa_id){
    return new Promise(async(resolve, reject) => {
        
        await db('rifa_status')
            .where({rifa_status_rifa_id})
            .update({rifa_status_ativo:0})

        await db.insert({rifa_status_condicao : 2, rifa_status_date: new Date(), rifa_status_rifa_id, rifa_status_ativo : 1}).into("rifa_status")
            resolve()
    })
}