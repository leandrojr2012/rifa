import {db} from "../../_database/bd.js"

export function StatusPausar(rifa_id){
    return new Promise((resolve, reject) => {
        
        db.insert({rifa_id}).into("rifa_status")
        .then (data =>{
            resolve()
        }).catch(err => {
            console.log(err)
        })
    })
}