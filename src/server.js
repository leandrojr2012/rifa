import Express  from "express";
import { InserirUsuario } from "./servicos/usuario/usuario_inserir.js";

const app = Express()
const port = 8080

app.use (Express.json())


function teste(){

    return new Promise( ( resolve, reject ) => {
      resolve()
    } )
   
   }

//ROTA
app.get('/', async (req, res)=>{
    res.send('Rifa!')
}),

//ROTA ITERACAO USUARIO
app.post('/usuario', async (req, res)=>{
    const usuario_nome = req.body.nome
    const usuario_email = req.body.email
    InserirUsuario(usuario_nome, usuario_email)
    teste().then(()=>{
        console.log('nome: ' + usuario_nome + ' email: ' +usuario_email)
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Usuario nao cadastrado!"
        })
    })
}),
/*
app.put('/usuario/{id}', async (req, res)=>{
    const usuario_id = req.params.id
    const usuario_nome = req.body.nome
    const usuario_email = req.body.email
    teste().then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario atualizado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Usuario nao atualizado!"
        })
    })
}),

app.delete('/usuario/{id}', async (req, res)=>{
    const usuario_id = req.params.id
    const usuario_nome = req.body.nome
    const usuario_email = req.body.email
    teste().then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario deletado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Usuario nao deletado!"
        })
    })
}),

//ROTA ITERACAO RIFA

//rotas rifa
app.post('/rifa/{id}', async (req, res)=>{
    const rifauser_id = req.params.id
    const rifa_nome = req.body.nome
    const rifa_data = req.body.data
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Rifa criada com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Rifa nao criada!"
        })
    })
}),

app.patch('/rifa/{id}', async (req, res)=>{
    const rifauser_id = req.params.id
    const rifa_nome = req.body.nome
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Rifa editada com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Rifa nao editada !"
        })
    })
}),

//rotas para status da rifa
app.patch('/rifa/{id}/iniciar', async (req, res)=>{ 
    const rifa_id = req.params.rifa_id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa/{id}/pausar', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa/{id}/retomar', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })

}),

app.patch('/rifa/{id}/cancelar', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa/{id}/finalizar', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa/{id}/estornar', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa/{id}/concluir', async (req, res)=>{
    const rifa_id = req.params.id
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

//rotas para reservas
app.post('/rifa_numero/{id}/reservar', async (req, res)=>{
    const res_num_id = req.params.id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Numero reservado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, numero nao reservado !"
        })
    })
}),

app.patch('/rifa_numero/{id}/confirmar', async (req, res)=>{
    const res_num_id = req.params.id
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa_numero/{id}/retornar', async (req, res)=>{
    const res_num_id = req.params.id
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.patch('/rifa_numero/{id}/estorno', async (req, res)=>{
    const res_num_id = req.params.id
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

//rotas listagem
/*app.get('/rifa/{id}/consultar', async (req, res)=>{

    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),

app.get('/rifa_numero/{id}/consultar', async (req, res)=>{

    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro!"
        })
    })
}),*/




//PORTA
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: ",port, "ROTA=> localhost:8080/")
});