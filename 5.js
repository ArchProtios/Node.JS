const os = require('os')

// it shows info about current user
const info = os.userInfo()
console.log(info);

// it shows the current uptime of the system
const uptime = os.uptime()
console.log(uptime);

// other methods that can be used with build-in os module are 
const currentOS = {
    name: os.type(),
    release: os.release(), //it releases the info such as the version number and code name of the os
    totalmem: os.totalmem(), //it returns total amount of memory in the system
    freemen: os.freemem(), //it returns total amount of free memory in the system
}

console.log(currentOS);