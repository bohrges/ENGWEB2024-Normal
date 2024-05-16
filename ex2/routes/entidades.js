const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:nipc', function(req, res) {
  const nipc = req.params.nipc;
  axios.get(`http://localhost:16000/contratos?entidade=${nipc}`)
    .then(response => {
      const contratos = response.data;
      const totalValorContratos = contratos.reduce((acc, contrato) => {
        const preco = typeof contrato.precoContratual === 'string' 
          ? parseFloat(contrato.precoContratual.replace(',', '.')) 
          : 0;
        return acc + (isNaN(preco) ? 0 : preco); 
      }, 0);

      const entidadeNome = contratos.length > 0 ? contratos[0].entidade_comunicante : 'Entidade Não Encontrada';

      res.render('entidade', {
        entidade: { nipc: nipc, nome: entidadeNome },
        contratos: contratos,
        totalValorContratos: totalValorContratos.toFixed(2) 
      });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

module.exports = router;