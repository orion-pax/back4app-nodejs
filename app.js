const { Buffer } = require('buffer');
const Parse = require('parse/node');
const {PORT, APPLICATION_ID, PARSE_SERVER_URL, MASTER_KEY, JAVASCRIPT_KEY} = require('./configs/config');
const express = require('express')
const app = new express();
const morgan = require('morgan')
var bodyParser = require('body-parser')

const todoController = require('./controllers/todo.controller')

app.use(bodyParser.json())
app.use(morgan('combined'))

app.use('/todos/', todoController)

app.listen(PORT,() => console.log(`Application is running on port :: ${PORT}.`))