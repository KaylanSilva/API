app.use(express.static('public'));
const express = require('express');
const app = express();
const port = 3000;

const alunos = [
  { id: 1, nome: 'Kaylan' },
  { id: 2, nome: 'Fernanda' },
  { id: 3, nome: 'Pedro' },
  { id: 4, nome: 'Ana' }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>API funcionando!</h1>');
});

app.get('/alunos', (req, res) => {
  let html = '<h1>Lista de Alunos</h1><ul>';
  alunos.forEach(aluno => {
    html += `<li>${aluno.nome}</li>`;
  });
  html += '</ul>';
  res.send(html);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);  
});