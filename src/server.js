import Express  from "express";
import { InserirUsuario }     from "./servicos/usuario/usuario_inserir.js";
import { DeletarUsuario }     from "./servicos/usuario/usuario_deletar.js";
import { AtualizarUsuario }   from "./servicos/usuario/usuario_atualizar.js"
import { CriarRifa }          from "./servicos/rifa/rifa_criar.js";
import { AtualizarRifa }      from "./servicos/rifa/rifa_atualizar.js";
import { StatusIniciar }      from "./servicos/rifa/rifa_status_iniciar.js";
import { StatusCancelar }     from "./servicos/rifa/rifa_status_cancelar.js";
import { StatusConcluir }     from "./servicos/rifa/rifa_status_concluir.js";
import { StatusEstornar }     from "./servicos/rifa/rifa_status_estornar.js";
import { StatusPausar }       from "./servicos/rifa/rifa_status_pausar.js";
import { StatusRetomar }      from "./servicos/rifa/rifa_status_retomar.js";
import { StatusNumReservar }  from "./servicos/numero/rifaNum_status_reservar.js";
import { StatusNumConfirmar } from "./servicos/numero/rifaNum_status_ confirmar.js";
import { StatusNumRetomar }   from "./servicos/numero/rifaNum_status_retomar.js";
import { StatusNumEstorno }   from "./servicos/numero/rifaNum_status_estorno.js";
import { ReservarRifaNum }       from "./servicos/numero/rifaNumero_criar.js";
import { AtualizarRifaNum }   from "./servicos/numero/rifaNum_atualizar.js";
import { InserirCliente }     from "./servicos/cliente/cliente_inserir.js"
import { AtualizarCliente }   from "./servicos/cliente/cliente_atualizar.js"
import { DeletarCliente }     from "./servicos/cliente/cliente_deletar.js"


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

//ROTA ITERACAO CLIENTE

app.post('/cliente', async (req, res) => {
    const cliente_nome = req.body.nome
    const cliente_celular = req.body.celular
    InserirCliente(cliente_nome, cliente_celular)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Cliente cadastrado com sucesso!"
        })
    }).catch((err)=>{console.log(err)
            return res.status(400).json({
                erro:true,
                mensagem: err
            })
    })
}),

app.put('/cliente/:id', async (req, res) => {
    const cliente_id = req.params.id
    const cliente_nome = req.body.nome
    const cliente_celular = req.body.celular
    AtualizarCliente(cliente_id, cliente_nome, cliente_celular)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Cliente atualizado com sucesso!"
        })
    }).catch((err)=>{console.log(err)
            return res.status(400).json({
                erro:true,
                mensagem: err
            })
    })
}),

app.delete('/cliente/:id', async (req, res) => {
    const cliente_id = req.params.id
    DeletarCliente(cliente_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Cliente deletado com sucesso!"
        })
    }).catch((err)=>{console.log(err)
            return res.status(400).json({
                erro:true,
                mensagem: err
            })
    })
}),

//ROTA ITERACAO RIFA

//rotas rifa
app.post('/rifa/:id', async (req, res)=>{
    const rifa_usuario_id = req.params.id
    const rifa_nome = req.body.nome
    const rifa_dt_inicio = req.body.data
    const rifa_qnt_numero = req.body.qnt_numero
    CriarRifa(rifa_usuario_id, rifa_nome, rifa_dt_inicio, rifa_qnt_numero)
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
    const rifa_qnt_numero = req.body.qnt_numero
    AtualizarRifa(rifa_nome, rifa_usuario_id, rifa_id, rifa_qnt_numero )
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
    const rifa_status_rifa_id = req.params.id
    StatusIniciar(rifa_status_rifa_id)
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

app.patch('/rifa/:id/pausar', async (req, res)=>{
    const rifa_id = req.params.id
    StatusPausar(rifa_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa/:id/retomar', async (req, res)=>{
    const rifa_id = req.params.id
    StatusRetomar(rifa_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })

}),

app.patch('/rifa/:id/cancelar', async (req, res)=>{
    const rifa_id = req.params.id
    StatusCancelar(rifa_id)
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa/:id/finalizar', async (req, res)=>{
    const rifa_id = req.params.id
    StatusFinalizar(rifa_id)
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa/:id/estornar', async (req, res)=>{
    const rifa_id = req.params.id
    StatusEstornar(rifa_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa/:id/concluir', async (req, res)=>{
    const rifa_id = req.params.id
    StatusConcluir(rifa_id)
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

//ROTA ITERACAO NUMERO RIFA

//rotas numero rifa (FALTA CONCLUIR (CRIAR RIFA NUMERO E ATUALIZAR RIFA NUMERO))
app.post('/rifa_numero/:id', async (req, res)=>{
    const rifa_numero_cliente_id = req.params.id
    const rifa_numero_rifa_id = req.body.id
    const rifa_numero_num = req.body.num
    ReservarRifaNum(rifa_numero_cliente_id, rifa_numero_rifa_id, rifa_numero_num)
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

app.put('/rifa_numero/:id', async (req, res)=>{
    const rifa_numero_cliente_id = req.params.id
    AtualizarRifaNum(rifa_numero_cliente_id)
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

//rotas para status do numero de rifa
app.post('/rifa_numero/:id/reservar', async (req, res)=>{
    const rifanumst_rifa_numero_id = req.params.id
    StatusNumReservar(rifanumst_rifa_numero_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Numero reservado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa_numero/:id/confirmar', async (req, res)=>{
    const rifanumst_rifa_numero_id = req.params.id
    StatusNumConfirmar(rifanumst_rifa_numero_id)
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa_numero/:id/retornar', async (req, res)=>{
    const rifanumst_rifa_numero_id = req.params.id
    StatusNumRetomar(rifanumst_rifa_numero_id)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
        })
    })
}),

app.patch('/rifa_numero/:id/estorno', async (req, res)=>{
    const rifanumst_rifa_numero_id = req.params.id
    StatusNumEstorno(rifanumst_rifa_numero_id)
    .then(()=>{
        return res,json({
            erro:false,
            mensagem:"Sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem: err
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