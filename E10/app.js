var http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
if(req.url==='/'){ // /-default url here 2000 ie localhost:2000
res.writeHead(200,{"Content-Type": "text/html"});
fs.createReadStream('./e10.html').pipe(res); // or('e10.html')
}
else if(req.url ==='/register' && req.method == 'POST'){ // url will change to
localhost:2000/register
var rawData = '';
req.on('data',function(data){
rawData += data;
})
req.on('end',function(){
var inputdata = new URLSearchParams(rawData);
res.writeHead(200,{"Content-Type": "text/html"}); //200-response code for
successful
res.write("<B style='color:blue'>User Submitted Details<B>")
res.write("<table border=1 cellspacing=0 style='color:blue' > <tr><th>Field Name</th><th>Value</th></tr>")
res.write('<tr><td>Name: </td><td>' +inputdata.get('myname1') + '</td></tr>');
res.write('<tr><td>Password: </td><td>' +inputdata.get('myname2') + '</td></tr>');
res.write('<tr><td>Age: </td><td>' +inputdata.get('myname3') + '</td></tr>');
res.write('<tr><td>Mobile number: </td><td>' +inputdata.get('myname4') +'</td></tr>');
res.write('<tr><td>Email: </td><td>' +inputdata.get('myname5') + '</td></tr>');
res.write('<tr><td>Gender: </td><td>' +inputdata.get('myname6') + '</td></tr>');
res.write('<tr><td>State: </td><td>' +inputdata.get('states') + '</td></tr>');
res.write('<tr><td>Skills: </td><td>' +inputdata.get('name8') +'</td></tr></table>');
res.end();
});
}
});
server.listen(2000,function(){
console.log('listening at 2000')
});
