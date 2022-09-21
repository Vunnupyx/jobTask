# Тестовое задание для front-end разработчика

Демо - http://a939753y.beget.tech/

## 2.2. List page
The “List” page is a tab set. Each tab has a simple table. It has 2 columns. First column is “Name” or some other object identity.
Second column is some amount or quantity. Please use the image below for your guidance.
It’s rows are objects from the JSON above, filtered by “type” property. The “Income” tab will display only those objects, which have “type” === “income”.
Other 3 tabs have exactly same filtering logic.

The URL of the page should be: /navigator?tab=<0..3>, where tab query parameter corresponds to a currently selected tab, and the type by which the table is filtered.

## Процесс сборки
Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies

```sh
$ git clone https://github.com/Vunnupyx/jobtask.git
```

Start the client.

```sh
$ npm install
$ npm start
```
