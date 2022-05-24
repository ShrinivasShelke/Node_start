const fs=require('fs');


// const fileSystem=fs.readdirSync(("./"))

// console.log(fileSystem);

fs.readdir(("./"),function(err,files){
    if(err){
        console.log("Eroor",err)
    }
    else{
        console.log("File",files)
    }})