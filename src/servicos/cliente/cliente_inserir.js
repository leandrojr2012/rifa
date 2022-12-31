import { db } from "../../_database/bd.js";
import { caracteres } from "../../funcoes/caracteres.js";

export async function InserirCliente(cliente_nome, cliente_celular){
    return new Promise(async(resolve, reject) =>{

       // let verificacaoCelular = cliente_celular.indexOf('()') > -1 && cliente_celular.indexOf('-') > -1

        const usuarioIgualNome = await db('cliente').where({cliente_nome});
        const usuarioIgualCelular = await db('cliente').where({cliente_celular});

        if(usuarioIgualNome.length > 0){
            reject('Nome existente!')
        }
        else if(usuarioIgualCelular.length > 0){
            reject('Celular existente!')
        }
        else if (caracteres(cliente_nome)){
            reject('Campo Nome nao pode receber caracteres para cadastrar um usuario!')
        }
        /*else if(verificacaoCelular == false){
            reject('Celular invalido')
        }*/
        else if(cliente_nome.trim() == ""){
            reject('Campo Nome nao pode ficar em branco!')
        }
        else if(cliente_celular == ""){
            reject('Campo Celular nao pode ficar em branco!')
        }
        else if(cliente_celular == " "){
            reject('Campo Celular nao pode conter espaço!')
        }
        else{   
            db.insert({cliente_nome, cliente_celular}).into("cliente")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}