## Na diretoria atual, encontram-se:
- datasets: pasta com o dataset em csv e json.
- ex1: pasta com o exercício 1.
- ex3: pasta com o exercício 2.
- csv_to_json.py: ficheiro usado para converter o dataset.
- PR.md: este ficheiro, para descrever os vários aspetos necessários.

## Modificações no dataset
- Script para passar para .json
- Alterar nome do campo "idcontrato" para "_id"

## Para importar:
- docker start mongoEW
- docker cp contratos.json mongoEW:/tmp
- dokcer exec -it mongoEW bash
- mongoimport -d contratos -c contratos /tmp/contratos.json --jsonArray


## Query 1
db.contratos.countDocuments({})

## Query 2
db.contratos.countDocuments({tipoprocedimento: "Ajuste Direto Regime Geral"})

## Query 3
db.contratos.aggregate([{$group: {_id: "$entidade_comunicante"}}, {$sort: {_id: 1}}, {$project: {_id: 0, entidade_comunicante: "$_id"}}]);

## Query 4
db.contratos.aggregate([{$group: {_id: "$tipoprocedimento", total: {$sum: 1}}}, {$sort: {_id: 1}}]);

## Query 5
db.contratos.aggregate([{$group: {_id: "$entidade_comunicante", totalMontante: {$sum: {$toDouble: {$replaceAll: {input: "$precoContratual", find: ",", replacement: "."}}}}}}, {$sort: {_id: 1}}]);


## Para executar API e interface
- posicionar na diretoria correta (ex1/api e ex2/interface, respetivamente)
- npm i 
- npm start
