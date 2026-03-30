const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});


// rotte crud 





app.listen(port, () => {
  console.log(`il mio blog è in esecuzione su http://localhost:${port}`);
});