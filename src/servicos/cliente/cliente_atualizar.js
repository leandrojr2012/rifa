import { db } from "../../_database/bd.js";
import { caracteres } from "../../funcoes/caracteres.js";

export async function AtualizarCliente(cliente_id, cliente_nome, cliente_celular){
    return new Promise(async(resolve, reject) =>{

        //const verificacaoCelular = usuario_email.indexOf('()') > -1 && usuario_email.indexOf('-') > -1

       const clienteIgualNome = await db('cliente').where({cliente_nome})
       const clienteIgualCelular = await db('cliente').where({cliente_celular})

       if(clienteIgualNome.length > 0){
        reject('Nome Existente!')
       }
       else if(clienteIgualCelular.length > 0){
        reject('celular Existente!')
       }
       else if(caracteres(cliente_nome)){
        reject('Campo Nome nao pode receber caracteres para ATUALIZAR usuario!')
       }
       else if(cliente_nome == ""){
        reject('Campo Nome nao pode ficar em branco!')
       }
       else if(cliente_celular == ""){
        reject('Campo celular nao pode ficar em branco!')
       }
       /*else if(verificacaoCelular == false){
        reject('celular invalido!')
       }*/
       else if(cliente_celular == ' '){
        reject('Campo celular nao pode conter espaço!')
       }        
        else{
                        db('cliente')
                .where({
                    cliente_id: cliente_id
                }).update({
                    cliente_nome: cliente_nome,
                    cliente_celular: cliente_celular
                })
                .then (data =>{
                    resolve()
                }).catch(err => {
                    console.log(err)
                })
            }
    })
}