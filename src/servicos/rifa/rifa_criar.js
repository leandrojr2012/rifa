import { caracteres } from "../../funcoes/caracteres.js"
import { caracteresTotais } from "../../funcoes/caracteresTotais.js"
import {db} from "../../_database/bd.js"

export function CriarRifa(rifa_usuario_id, rifa_nome, rifa_dt_inicio, rifa_qnt_numero){
    return new Promise((resolve, reject) => {

           
        if(rifa_nome == ''){
            reject('Campo Nome rifa, nao pode ficar em branco!')          
        }
        else if(caracteres(rifa_nome)){
            reject('Campo Nome rifa, nao pode receber caracteres!')
        }
        else if(rifa_dt_inicio == ''){
            reject('Campo Data, nao pode ficar em branco!')
        }
        else if(caracteresTotais(rifa_dt_inicio)){
            reject('Campo Data rifa, nao pode conter caracteres!')
        }
        else if(rifa_qnt_numero == ""){
            reject('Campo Quantidade de Numero, nao pode ficar em branco')
        }
         else{
                db.insert({rifa_usuario_id, rifa_nome, rifa_dt_inicio, rifa_qnt_numero}).into("rifa")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}