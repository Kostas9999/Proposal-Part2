

const si = require('systeminformation');

let network

module.exports =   async function getNetwork() {
   network = "in"



 await si.networkInterfaces(i=>{  network = i })
  


return network



               }
              
           
             
             
              