var http=require('http');
var fs=require('fs');


var server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);

    if(req.url==='/home'||req.url==='/'){
        res.writeHead(200,{'Content-Type':'Text.html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'Text.html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }else if(req.url=='/api/tonton'){
        var tonton=[{name:'tonton Camus',age:' 40'},
                {name:' Carine Galli',age:'35'}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(tonton));
    }else{
        res.writeHead(404,{'Content-Type':'Text.html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
 console.log('yo dawgs, now listening to port 300');
