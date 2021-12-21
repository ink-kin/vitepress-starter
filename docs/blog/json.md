---
title: json
head:
  - - meta
    - name: description
      content: 'Здесь собираю json практики'
tags:
categories:
- aboutMe
---

## json
Здесь собираю json практики

- any-json [github-any-json](https://github.com/any-json/any-json)
```
any-json convert package.json package.json5

# Prints an JSON array containing an item for every JSON file in directory
any-json combine *.json

# Combines A.json and B.json, writing the result to C.json
any-json combine A.json B.json --out C.json

# Create a csv from a collection of flat YAML files
any-json combine *.yaml --out=data.csv

# Prints an JSON array containing an item for every JSON file in directory
any-json combine *.json

# Combines A.json and B.json, writing the result to C.json
any-json combine A.json B.json --out C.json

# Create a csv from a collection of flat YAML files
any-json combine *.yaml --out=data.csv

# Creates a JSON file for each row in the CSV where the name is based on the `product_id` column
any-json split products.csv prod-{product_id}.json
```
Проблемный - xml
Ограниченное - csv, xls, xlsx
[Подробнее](https://github.com/any-json/any-json)
