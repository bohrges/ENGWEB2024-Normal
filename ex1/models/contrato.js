const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contratoSchema = new Schema({
  _id: String,
  nAnuncio: String,
  tipoprocedimento: String,
  objectoContrato: String,
  dataPublicacao: String,
  dataCelebracaoContrato: String,
  precoContratual: String,
  prazoExecucao: Number,
  NIPC_entidade_comunicante: String, 
  entidade_comunicante: String,
  fundamentacao: String
}, {
  versionKey: false
});

const Contrato = mongoose.model('contratos', contratoSchema);

module.exports = Contrato;