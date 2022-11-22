import { caracteres } from "../../funcoes/caracteres.js"
import {db}  from "../../_database/bd.js"

export async function AtualizarUsuario(usuario_id, usuario_nome, usuario_email){
    return new Promise(async( resolve, reject ) => {

        const verificacaoEmail = usuario_email.indexOf('@') > -1 && usuario_email.indexOf('.com') > -1

       const usuarioIgualNome = await db('usuario').where({usuario_nome})
       const usuarioIgualEmail = await db('usuario').where({usuario_email})

       if(usuarioIgualNome.length > 0){
        reject('Nome Existente!')
       }
       else if(usuarioIgualEmail.length > 0){
        reject('Email Existente!')
       }
       else if(caracteres(usuario_nome)){
        reject('Campo Nome nao pode receber caracteres para ATUALIZAR usuario!')
       }
       else if(usuario_nome == ""){
        reject('Campo Nome nao pode ficar em branco!')
       }
       else if(usuario_email == ""){
        reject('Campo Email nao pode ficar em branco!')
       }
       else if(verificacaoEmail == false){
        reject('Email invalido!')
       }
       else if(usuario_email == ' '){
        reject('Campo Email nao pode conter espaço!')
       }        
        else{
                        db('usuario')
                .where({
                    usuario_id: usuario_id
                }).update({
                    usuario_nome: usuario_nome,
                    usuario_email: usuario_email
                })
                .then (data =>{
                    resolve()
                }).catch(err => {
                    console.log(err)
                })
            }
    })
}