var http=require('http');
var fs=require('fs');


var server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    // res.writeHead(200,{'Content-Type': 'text/plain'}
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj={
        name: 'Tonton',
        job: 'Everything',
        age: 'Unknown'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
 console.log('yo dawgs, now listening to port 300');
