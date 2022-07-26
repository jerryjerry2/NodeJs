//CommonJS - every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

//console.log(data);

require('./7-mind-grenade');

// sayHi.sayHi('HongSoThana');
// sayHi.sayHi(names.minea);
// sayHi.sayHello(names.thana);

//For Global
//console.log(__dirname);