const app = require('./src/config/server')
const mensagens = require('./src/models/mensagens')
const connectMsql = require('./src/config/connectMysql')
const connection = require('./src/config/connection')


app.get('/produtos', (req, res) => {
    connection.query('SELECT * from produtos', (error, result) => {
        res.json(result ? result : error);
      });
    });
  
    
    app.get('/mensagens', async (req, res) => {
      res.json(await mensagens.find());
    });
    
    app.post('/mensagens', async (req, res) => {
      const { nome, msg } = req.body;
      res.json(await mensagens.create({ nome, msg }));
    });