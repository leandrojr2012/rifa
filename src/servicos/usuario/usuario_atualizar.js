import {db}  from "../../_database/bd.js"

export function AtualizarUsuario(usuario_id, usuario_nome, usuario_email){
    return new Promise(( resolve, reject ) => {

        let caractere_nome
        let caractere_email

        if(usuario_nome){
            for(let i of usuario_nome){
                if(i =='/' ||i=='$' ||i== '@'||i=='!'||i=='#'||i=='%'||i=='¨'||i=='&'||i=='*'
                ||i=='('||i==')'||i=='_'||i=='-'||i=='+'||i=='=' ||i=='?'){
                    caractere_nome = i
                }
                if(caractere_nome){
                    reject('Voce nao pode utlizar caracteres para atualizar um nome!')
                }
                if(usuario_nome == ' '){
                    caractere_nome = i
                }
                if(caractere_nome){
                    reject('Voce nao pode utilizar espaco entre as letras!')
                }
                if(usuario_nome == ""){
                    reject('Voce nao pode deixar o campo nome em branco!')
                }
            }
        }
        if(usuario_email){
            for(let i of usuario_email){
                if(i == '@'){
                    caractere_email = i
                    }
                }
            }
        if(usuario_email == ""){
            reject('Voce nao pode deixar o campo email em branco!')
        }
        if(caractere_email != '@' ){
            console.log(caractere_email)
            reject('Esse nao é um EMAIL valido!')
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