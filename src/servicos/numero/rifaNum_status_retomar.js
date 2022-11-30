import { db } from "../../_database/bd.js";

export async function StatusNumRetomar(res_num_id){
    return new Promise (async (resolve, reject) => {

        await db('rifa_numero_status')
                .where({
                    rifanumst_rifa_numero_id
                })
                .update({
                    rifanumst_ativo:0
                })

        await db.insert({rifanumst_condicao : 1, rifanumst_date : new Date(), rifanumst_rifa_numero_id, rifanumst_ativo : 1}).into('rifa_numero_status')
                resolve()
    })
}