import {db}  from "../../_database/bd.js"

export function DeletarUsuario( usuario_id ){
    return new Promise(( resolve, reject ) => {

        db('usuario')
        .where({
            usuario_id: usuario_id
        }).del()
        .then (data =>{
            resolve()
        }).catch(err => {
            console.log(err)
        })
    })
   }