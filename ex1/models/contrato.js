const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contratoSchema = new Schema({
  _id: String,
  nAnuncio: String,
  tipoprocedimento: String,
  objectoContrato: String,
  dataPublicacao: String,
  dataCelebracaoContrato: String,
  //precoContratual: { type: Number, set: v => Number(v.replace(',', '.')) }, // Convert string to number and handle comma as decimal
  precoContratual: String,
  prazoExecucao: Number,
  NIPC_entidade_comunicante: String, // Assuming it's stored as a string due to potential leading zeros
  entidade_comunicante: String,
  fundamentacao: String
}, {
  versionKey: false // Disables the versioning field (__v)
});

const Contrato = mongoose.model('contratos', contratoSchema);

module.exports = Contrato;