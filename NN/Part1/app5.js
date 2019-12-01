var fs=require('fs');

// fs.rmdirSync('test');

fs.mkdir('test',function(){
  fs.readFile('writeMe.txt','utf8', function(err, data){
    fs.writeFile('./test/test.txt',data, (err)=>{
      if(err) throw err;
      console.log('I copied it');
    });
  } );
});
