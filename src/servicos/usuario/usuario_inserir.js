import knex from "../../_database/bd.js"

export function InserirUsuario( usuario_nome, usuario_email ){
    return new Promise(( resolve, reject ) => {

        knex.insert(usuario_nome, usuario_email).into("usuario").then (data =>{

        }).catch(err => {
            console.log(err)
        })
    })
   }