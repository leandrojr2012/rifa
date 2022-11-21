import {db}  from "../../_database/bd.js"

export async function InserirUsuario( usuario_nome, usuario_email ){
    return new Promise(async( resolve, reject ) => {

        let caractere_email

        let caractere_nome

        const usuarioIgualNome = await db('usuario').where({usuario_nome : usuario_nome})
        const usuarioIgualEmail =  await db('usuario').where({usuario_email : usuario_email})
        console.log(usuarioIgualNome)

        if(usuario_nome == usuarioIgualNome){
            reject('Nome de usuario ja cadastrado!')
        }
        else if(usuario_email == usuarioIgualEmail){
            reject('Email ja cadastrado')
        }
        else if(usuario_nome){
            for(let i of usuario_nome){
                if(i =='/' ||i=='$' ||i== '@'||i=='!'||i=='#'||i=='%'||i=='¨'||i=='&'||i=='*'
                 ||i=='('||i==')'||i=='_'||i=='-'||i=='+'||i=='=' ||i=='?'){
                    caractere_nome = i
                    break;
                }
                if(caractere_nome){
                    reject('Voce nao pode utilizar caracteres para cadastrar um usuario!')
                }
                if(i == ' '){
                    caractere_nome = i
                    break;
                }
                if(caractere_nome){
                    reject('Voce nao pode utulizar espaço entre as letras!')
                }
            }
        }   
        else if(usuario_nome == ""){
            reject('Voce nao pode deixar o campo nome em branco!')
        }
        else if(usuario_email){
            for(let i of usuario_email){
                if(i == '@'){
                    caractere_email = i
                }
            }   
        }
        //console.log(caractere_email.indexOf('@') !== -1)
        else if(usuario_email == ""){
            reject('Voce nao pode deixar o campo email em branco!')
        }
        else if(caractere_email != '@' ){
            reject('Esse nao é um EMAIL valido!')
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