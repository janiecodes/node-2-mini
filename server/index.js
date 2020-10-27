const express = require('express');
const app = express();

const bc = require('./controllers/books_controller')

app.use(express.json());


//ENDPOINTS
app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})