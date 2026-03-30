const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
const listaPost = require('./blogPost/bacheca');

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// rotte crud 

// index
app.get('/bacheca', function (req, res) {
res.json(listaPost);
});


// show
app.get('/bacheca/:id', function (req, res) {
res.send('Dettagli del post ' + req.params.id);
});


// store
app.post('/bacheca', function (req, res) {
res.send('Creazione nuovo post');
});


// update
app.put('/bacheca/:id', function (req, res) {
res.send('Modifica integrale del post ' + req.params.id);
});


// modify
app.patch('/bacheca/:id', function (req, res) {
res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
app.delete('/bacheca/:id', function (req, res) {
res.send('Eliminazione del post ' + req.params.id);
});





app.listen(port, () => {
  console.log(`il mio blog è in esecuzione su http://localhost:${port}`);
});