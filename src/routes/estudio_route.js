const estudio_controller = require('../controllers/estudio_controller.js');
const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
    const code = estudio_controller.store(req.body);
    res.status(code).json();
});

route.get('/', (req, res) => {
    res.json(estudio_controller.index(req.query));
});

route.get('/:id', (req, res) => { 
    res.json(estudio_controller.show(req.params.id));
});

route.put('/:id', (req, res) => {
    const code = estudio_controller.update(req.body, req.params.id);
    res.status(code).json();
});

route.delete('/:id', (req, res) => {
    estudio_controller.destroy(req.params.id);
    res.json();
});

module.exports = route;