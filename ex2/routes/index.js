const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
  axios.get('http://localhost:16000/contratos')
  .then(dados => {
    res.render('index', {lista: dados.data})
  })
    .catch(error => {
      res.render('error', {error: error})
    })
});

router.get('/:id', function(req, res) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
  .then(dados => {
    res.render('contrato', {contrato: dados.data})
  })
    .catch(error => {
      res.render('error', {error: error})
    }
  )
});




module.exports = router;
