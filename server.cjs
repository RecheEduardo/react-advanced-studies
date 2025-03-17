const express = require('express');
const cors = require('cors');

const server = express();
const PORT = 3000;

server.use(cors());

server.get('/alunos' , (req , res) => {
    res.json([
        {
            nome: 'Eduardo',
            idade: 18,
            cidade: 'São Paulo'
        },
        {
            nome: 'Bianca',
            idade: 19,
            cidade: 'Guarulhos'
        }
    ]);
});

server.listen(PORT , () => {
    console.log(`SUCESSO! Servidor hospedado na seguinte url: http://localhost:${PORT}/alunos`);
});