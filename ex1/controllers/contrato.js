const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.get = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.getByTipo = tipo => {
    console.log(tipo)
    return Contrato
        .find({tipoprocedimento: tipo})
        .exec()
}

module.exports.getByEntidade = entidade => {
    console.log(entidade)
    return Contrato
        .find({NIPC_entidade_comunicante: entidade})
        .exec()
}

module.exports.getOne = id => {
    return Contrato
        .findOne({_id: id})
        .exec()
}

module.exports.getEntidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .sort({ entidade_comunicante: 1 })
        .exec()
}

module.exports.getTipos = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .sort({ tipoprocedimento: 1 })
        .exec()
}


module.exports.insert = contrato => {
    var newContrato = new Contrato(contrato)
    return newContrato.save()
}

module.exports.delete = id => {
    return Contrato
        .deleteOne({_id: id})
        .exec()
}

module.exports.update = (id, updateData) => {
    return Contrato.findByIdAndUpdate(id, updateData, { new: true })
      .then(updatedContrato => {
        if (!updatedContrato) {
          throw new Error('Contrato not found');
        }
        return updatedContrato;
      })
      .catch(err => {
        console.error("Error updating contrato:", err);
        throw err;
      });
  }

