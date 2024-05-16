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


## Para executar API e interface
- posicionar na diretoria correta (ex1 e ex2, respetivamente)
- npm i 
- npm start
