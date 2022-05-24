const os=require('os');
var freeSpace=os.freemem();

var totalSpace=os.totalmem();
console.log(freeSpace ,totalSpace);