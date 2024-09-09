const publicadora_controller = require('../controllers/publicadora_controller.js');
const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
    const code = publicadora_controller.store(req.body);
    res.status(code).json();
});

route.get('/', (req, res) => {
    res.json(publicadora_controller.index(req.query));
});

route.get('/:id', (req, res) => { 
    res.json(publicadora_controller.show(req.params.id));
});

route.put('/:id', (req, res) => {
    const code = publicadora_controller.update(req.body, req.params.id);
    res.status(code).json();
});

route.delete('/:id', (req, res) => {
    publicadora_controller.destroy(req.params.id);
    res.json();
});

module.exports = route;