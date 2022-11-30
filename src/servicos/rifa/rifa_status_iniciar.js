import { db } from "../../_database/bd.js";

export function StatusIniciar(rifa_status_rifa_id){
    return new Promise((resolve, reject) => {

        let rifa_status_date = new Date()
        let rifa_status_condicao = 1
        let rifa_status_ativo = 1
        
        db('rifa_status')
        .where({rifa_status_rifa_id})
        .update({rifa_status_ativo:0})
        .then (data =>{
            resolve()
        }).catch(err => {
            console.log(err)
        })
        
        db.insert({rifa_status_condicao, rifa_status_date, rifa_status_rifa_id, rifa_status_ativo}).into("rifa_status")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
    })
}   


