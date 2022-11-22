let nome = 'leandro@'
let esseaqui

for(let i of nome){
    if(i == '@'){
        esseaqui = i
        console.log("erro")
}
}

if(esseaqui == undefined){
    console.log('vazio')
}else{
    console.log('jds')
}

console.log(esseaqui)

var string = "Jose_Silva";
if (string.indexOf('_') < -1)
{
  console.log("contém");
}else{
    console.log('erro')
}
