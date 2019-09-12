const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 4000; //porta padrão
const sql = require('./sql/execute-sql');

app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/disk', (req, res) =>{
  sql.execSQLQuery('SELECT * FROM tb_disk', res);
})
router.delete('/disk/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  sql.execSQLQuery('DELETE FROM tb_disk WHERE id = ?', res, [id]);
})
router.post('/disk', (req, res) =>{
  const name = req.body.name.substring(0,50);
  const band = req.body.band.substring(0,50);
  const date = req.body.date;
  sql.execSQLQuery(`INSERT INTO tb_disk(name, band, date) VALUES(?,?,?)`, res, [name, band, date]);
});
router.patch('/disk/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  const name = req.body.name.substring(0,50);
  const band = req.body.band.substring(0,50);
  const date = req.body.date;
  sql.execSQLQuery(`UPDATE tb_disk SET name=?, band=?, date=? WHERE ID=?`, res, [name, band, date, id]);
})

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Pass to next layer of middleware
  next();
});

app.use('/', router);


app.listen(port);
console.log('API funcionando!');