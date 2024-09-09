const jogo_controller = require('../controllers/jogo_controller.js');
const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
    const code = jogo_controller.store(req.body);
    res.status(code).json();
});

route.get('/', (req, res) => {
    res.json(jogo_controller.index(req.query));
});

route.get('/:id', (req, res) => { 
    res.json(jogo_controller.show(req.params.id));
});

route.put('/:id', (req, res) => {
    const code = jogo_controller.update(req.body, req.params.id);
    res.status(code).json();
});

route.delete('/:id', (req, res) => {
    jogo_controller.destroy(req.params.id);
    res.json();
});

module.exports = route;