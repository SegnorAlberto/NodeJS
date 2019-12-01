var fs=require('fs');

// var readme=fs.readFileSync('readme.txt','utf8');

fs.readFile('readme.txt','utf8',function(err,data){
  // console.log(data);
  fs.writeFile('writeMe.txt',data,(err)=>{
    if(err) throw err;
    console.log('I copied it');
  });
});

// fs.writeFileSync('writeMe.txt',readme);
// console.log('readme');
fs.unlink('readme.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
