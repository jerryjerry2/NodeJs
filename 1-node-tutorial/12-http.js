const http = require('http');
//npm init -y for create package.json
//npm i lodash == command install npm package
//npm i bootstrap == command install npm package

const server = http.createServer((req, res)=>{
    if(req.url === '/'){     
        res.end('This is Homepage');
    }else if(req.url === '/about'){     
        res.end('There is our history');
    }else{
        res.end(`
            <h1>Page Not Found</h1>
            <a href='/'>Back to homepage</a>
        `);
    }
  
});

server.listen(5000);

//npm init -y for create package.json
//npm i lodash == command install npm package
//npm i bootstrap == command install npm package 
//npm i nodemon -D == command install npm package 

const _ = require('lodash');

const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);

const test = _.flattenDeep(items);

console.log(test);
console.log('Hello world');