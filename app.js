//npm init -y for create package.json
//npm i lodash == command install npm package
//npm i bootstrap == command install npm package 

const _ = require('lodash');

const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);