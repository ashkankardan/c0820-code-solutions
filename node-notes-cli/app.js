/* eslint-disable no-console */

const read = require('./read');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const file = 'data.json';
const operation = process.argv[2];
const userInput = process.argv[3];
const updateId = process.argv[3];
const updateInput = process.argv[4];

switch (operation) {
  case 'read':
    read(file);
    break;
  case 'create':
    create(file, userInput);
    break;
  case 'delete':
    remove(file, userInput);
    break;
  case 'update':
    update(file, updateId, updateInput);
    break;
  default:
    console.log('please try again!!');
}
