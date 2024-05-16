var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');
const { connect } = require('mongoose');


router.get('/', function(req, res) {
  if (req.query.tipo) {
      Contrato.getByTipo(req.query.tipo)
          .then((data) => res.jsonp(data))
          .catch((erro) => res.status(500).jsonp(erro));
  
  } else if (req.query.entidade) {
      Contrato.getByEntidade(req.query.entidade)
        .then((data) => res.jsonp(data))
        .catch((erro) => res.status(500).jsonp(erro));
  
  } else {
      Contrato.get()
          .then((data) => res.jsonp(data))
          .catch((erro) => res.status(500).jsonp(erro));
  }
});


router.get('/entidades', (req, res) => {
  Contrato.getEntidades()
    .then(entidades => res.json(entidades))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.get('/tipos', (req, res) => {
  Contrato.getTipos()
    .then(tipos => res.json(tipos))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.get('/:id', (req, res) => {
  Contrato.getOne(req.params.id)
    .then(contrato => res.json(contrato))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.post('/', (req, res) => {
  Contrato.insert(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.delete('/:id', (req, res) => {
  Contrato.delete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.put('/:id', (req, res) => {
  Contrato.update(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;