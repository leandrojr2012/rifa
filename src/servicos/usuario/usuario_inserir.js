import {db}  from "../../_database/bd.js"
import {caracteres} from "../../funcoes/caracteres.js"

export async function InserirUsuario( usuario_nome, usuario_email ){
    return new Promise(async ( resolve, reject ) => {

        let verificacaoEmail = usuario_email.indexOf('@') > -1 && usuario_email.indexOf('.com') > -1

        const usuarioIgualNome = await db('usuario').where({usuario_nome});
        const usuarioIgualEmail = await db('usuario').where({usuario_email});

        if(usuarioIgualNome.length > 0){
            reject('Nome existente!')
        }else if(usuarioIgualEmail.length > 0){
            reject('Email existente!')
        }
        else if (caracteres(usuario_nome)){
            reject('Campo Nome nao pode receber caracteres para cadastrar um usuario!')
        }
        else if(verificacaoEmail == false){
            reject('Email invalido')
        }
        else if(usuario_nome == ""){
            reject('Campo Nome nao pode ficar em branco!')
        }
        else if(usuario_email == ""){
            reject('Campo Email nao pode ficar em branco!')
        }
        else if(usuario_email == " "){
            reject('Campo Email nao pode conter espaço!')
        }
        else{   
            db.insert({usuario_nome, usuario_email}).into("usuario")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
   }