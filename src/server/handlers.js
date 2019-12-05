const fs = require('fs');
const path = require('path');
const getData = require('../queries/get-data');
const postData = require('../queries/post-data');
const querystring = require('querystring');


function handleHome (req, res, endpoint) {
    const filePath = path.join(__dirname, '..', '..', 'index.html');
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, {'Content-type': 'text/html'});
            res.end('<h1> We\'ve had a problem</h1>');
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(file);
        }
    });
}

function handlePublic(req, res, endpoint) {
    const extension = endpoint.split('.')[1];
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        png: 'image/png',
        jpeg: 'image/jpeg'
    }
    
const filePath = path.join(__dirname, '..', '..', endpoint);

fs.readFile(filePath, (err, file) => {
 if(err) {
     res.writeHead(404, {'Content-type' : 'text/html'});
     res.end('<h1> 404 nothing here </h1>')
 } else {
     res.writeHead(200, {'Content-type' : 'text/html'});
     res.end(file);
 }
});
}

function postHandler (req, res) {
    let allData ='';
    req.on('data', chunk => {
        allData += chunk;
    })
    req.on('end', () => {
        console.log('all data  from getData: ', querystring.parse(allData));
        // const {x ,y, z} = querystring.parse(allData);
        ourTable(x, y, z, err => {
            if (err) {
                res.writeHead(500, {'Content-type' : 'text/html'});
                res.end('<h1>Server side error </h1>');
            }
            res.writeHead(301, {Location: '/'});
            res.end(JSON.stringify(result))
        })
    })

}

function getHandler (req, res) {
    let allData = '';
    req.on('data' , chunk => {
        allData += chunk;
    })

    req.on('end', () => {
        console.log('all from get handler: ', querystring.parse(allData));
        const{x, y, z} = querystring.parse(allData);
        ourTable(x, y, z, err => {
            if (err) {
                res.writeHead(500, 'Computer says no')
                res.end('<h1> Sorry no files for you</h1>')
            }
        res.writeHead(301, {Location: '/'});
        res.end(JSON.stringify(result))
        })
    })
}


module.exports = {
    handleHome,
    handlePublic,
    postHandler,
    getHandler
}

// handlers.js