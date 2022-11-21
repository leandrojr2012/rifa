import {db} from "../../_database/bd.js"

export function CriarRifa(rifa_nome, rifa_dt_inicio, rifa_usuario_id){
    return new Promise((resolve, reject) => {
            let caractere_rifa
            let caractere_rifaData

            let nomeRifa = db('rifa').where({rifa_nome: rifa_nome})
            //const idUserRifa = db('rifa').where({rifauser_id})

            if(rifa_nome == nomeRifa){
                reject('Esse nome de rifa ja existe!')
            }
            else if(rifa_nome){
                for(let i of rifa_nome){
                    if(i =='/' ||i=='$' ||i== '@'||i=='!'||i=='#'||i=='%'||i=='¨'||i=='&'||i=='*'
                    ||i=='('||i==')'||i=='_'||i=='-'||i=='+'||i=='=' ||i=='?'){
                       caractere_rifa = i
                   }
                   if(caractere_rifa){
                       reject('Voce nao pode utilizar caracteres para cadastrar uma rifa!')
                       break;
                   }
                   
                }
            }else if(rifa_nome == ""){

                reject('Voce nao pode deixar o campo nome em branco')

            }else if(rifa_dt_inicio){
                for(let i of rifa_dt_inicio){
                    if(i ==':' ||i=='$' ||i== '@'||i=='!'||i=='#'||i=='%'||i=='¨'||i=='&'||i=='*'
                    ||i=='('||i==')'||i=='_'||i=='/'||i=='+'||i=='=' ||i=='?'){
                       caractere_rifaData = i
                   }
                   if(caractere_rifaData){
                       reject('Voce nao pode utilizar caracteres na data, Ex: xxxx-xx-xx!')
                   }
                   if(i == ' '){
                       caractere_rifaData = i
                   }
                   if(caractere_rifaData){
                       reject('Voce nao pode utulizar espaço!')
                   break;
                   }
                }
            }else if(rifa_dt_inicio == ""){

                reject('Voce nao pode deixar o campo DATA em branco!')

            } else{
                db.insert({rifa_usuario_id, rifa_nome, rifa_dt_inicio}).into("rifa")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
            }

    })
}