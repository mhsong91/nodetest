var http=require('http');
console.log('http starting');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.end('<b>안녕 이새끼야</b>')

}).listen(4003);
console.log('http started');