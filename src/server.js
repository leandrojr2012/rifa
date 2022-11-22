import Express  from "express";
import { InserirUsuario } from "./servicos/usuario/usuario_inserir.js";
import { DeletarUsuario } from "./servicos/usuario/usuario_deletar.js";
import { AtualizarUsuario } from "./servicos/usuario/usuario_atualizar.js"
import { CriarRifa } from "./servicos/rifa/rifa_criar.js";
import { AtualizarRifa } from "./servicos/rifa/rifa_atualizar.js";
import { StatusIniciar } from "./servicos/rifa/rifa_status_iniciar.js";

const app = Express()
const port = 8080

app.use (Express.json())

//ROTA
app.get('/', async (req, res)=>{
    res.send('Rifa!')
}),

//ROTA ITERACAO USUARIO
app.post('/usuario', async (req, res)=>{
    const usuario_nome = req.body.nome
    const usuario_email = req.body.email
    InserirUsuario(usuario_nome, usuario_email)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return  res.status(400).json({
            erro:true,
            mensagem:err
        })
    })
}),

app.put('/usuario/:id', async (req, res)=>{
    const usuario_id = req.params.id
    const usuario_nome = req.body.nome
    const usuario_email = req.body.email
    AtualizarUsuario(usuario_id, usuario_nome, usuario_email)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario atualizado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:err
        })
    })
}),

app.delete('/usuario/:id', async (req, res)=>{
    const usuario_id = req.params.id
    DeletarUsuario(usuario_id)
    .then(()=>{
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
app.post('/rifa/:id', async (req, res)=>{
    const rifa_usuario_id = req.params.id
    const rifa_nome = req.body.nome
    const rifa_dt_inicio = req.body.data
    CriarRifa(rifa_usuario_id, rifa_nome, rifa_dt_inicio)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Rifa criada com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:err
        })
    })
}),

app.put('/rifa/:id', async (req, res)=>{
    const rifa_usuario_id = req.params.id
    const rifa_id = req.body.id_rifa
    const rifa_nome = req.body.nome
    AtualizarRifa(rifa_nome, rifa_usuario_id, rifa_id )
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Rifa editada com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:err
        })
    })
}),

//rotas para status da rifa
app.patch('/rifa/:id/iniciar', async (req, res)=>{ 
    const rifa_id = req.params.rifa_id
    StatusIniciar(rifa_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:err
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