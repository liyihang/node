var ser = require('http');
var port = 8000;
var data = { key: 'hello', value: 'world'};
var serve = ser.createServer(function(request,response){
    response.writeHead(200,{
        'content-type': 'application/json'
    });
    response.write('Hello World');
   


})
serve.listen(port);
console.log('serve run on port 8000');