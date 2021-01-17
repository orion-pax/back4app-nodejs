const Parse = require('parse/node');
const ToDo = Parse.Object.extend('ToDo');
const query = new Parse.Query(ToDo);
const { APPLICATION_ID, PARSE_SERVER_URL, MASTER_KEY, JAVASCRIPT_KEY } = require('../configs/config');
Parse.serverURL = PARSE_SERVER_URL;

Parse.initialize(
    APPLICATION_ID,
    JAVASCRIPT_KEY,
    MASTER_KEY
);

module.exports = {
    Parse,
    query,
    ToDo
}