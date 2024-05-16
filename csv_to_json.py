import csv
import json

with open('datasets/contratos2024.csv', mode='r', newline='', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file, delimiter=';')
    data = list(csv_reader)
    

with open('contratos.json', mode='w', encoding='utf-8') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

print("Conversion complete. The JSON file has been saved as 'contratos.json'.")
