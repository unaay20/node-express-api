const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(__dirname));
app.use(express.json());

app.use((req, res , next) => {
    console.log('Soy el hombre de en medio');
    next();
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/saludo/:nombre', (req, res) => {
    res.send(`Hola, ${req.params.nombre}!`);
});
app.post('/mensaje', (req, res) => {
    res.json({ mensaje: `Recibido: ${req.body.mensaje} ` });
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});