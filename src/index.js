const express = require('express');
const estudio_route = require('./routes/estudio_route.js');
const genero_route = require('./routes/genero_route.js');
const jogo_route = require('./routes/jogo_route.js');
const publicadora_route = require('./routes/publicadora_route.js');
const nome_caixa_alta = require('./middlewares/nome_caixa_alta.js');
const port = 3000;
const app = express();

app.use(express.json());
app.use(nome_caixa_alta);

app.use('/estudio', estudio_route);
app.use('/genero', genero_route);
app.use('/jogo', jogo_route);
app.use('/publicadora', publicadora_route);

app.listen(port, () => {
    console.log(`Server running at port $${port}`);
});