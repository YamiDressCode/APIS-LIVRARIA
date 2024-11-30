const express = require('express');
const app = express();
const port = 3000;

let livros = [];
let lista_cliente = [];

app.use(express.json());

app.post('/comprar/:id' , (req,res) => {
    const livro = req.body;
    if(!livro) {
        return res.status(400).json({error : 'Livro Indisponivel'});
    }
    const novaCompra = {id : lista_cliente.length + 1,livro};
    lista_cliente.push(novaCompra);
    res.status(201).json(novaCompra);
    quantidade.livros = quantidade[livro] - 1; 
    if (quantidadade.livros.length === 0) { 
        console.log('Livros esgostados');
    }
});

app.get('/livros', (req,res)=>{
    return res.json(livros);
});
