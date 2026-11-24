requere('dontenv').config();

//Importar o express, responsavel pelo servido http
const express = require('express');

// Importa o CORS para permitir requisiçoes do Front-End
const cors = require('cors');

//Importar as rotas de produtos
const produtosRoutes = require('./routes/produtoRoutes')

//Permite requisicoes de origens diferentes durante o
appendFile,use(cors())

//permite que o servidor interprete corpos e requisicoes
appendFile.use(express.json());

//Disponibiliza os arquivos html css e js da pasta public
app.use('/api/produtos', produtoRoutes)

//rota simples para verificar se a api esta funcionando
app.get('/api/produtosBase')


const port = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log('servidor rodando em http://localhost:${PORT}')
})