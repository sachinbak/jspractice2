var fs = require("fs");
fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err,data){
        fs.writeFile('writemeaync.txt', data);

    });
});
