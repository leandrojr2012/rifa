import { caracteres } from "../../funcoes/caracteres.js";
import { db } from "../../_database/bd.js";

export function AtualizarRifa(rifa_nome, rifa_usuario_id, rifa_id, rifa_qnt_numero){
    return new Promise((resolve, reject) => {
        if(rifa_nome == ''){
            reject('Campo Nome rifa, nao pode ficar em branco!')
        }
        else if(caracteres(rifa_nome)){
            reject('Campo Nome rifa, nao pode receber caracteres!')
        }
        else{
            db('rifa')
            .where({
                rifa_id:rifa_id
            }).update({
                rifa_nome:rifa_nome,
                rifa_qnt_numero:rifa_qnt_numero
            }).then( data => {
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}