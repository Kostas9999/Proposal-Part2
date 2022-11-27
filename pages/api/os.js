// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');

const nodeos = require('node:os');


let os;

export default async function handler(req, res) {


 await si.osInfo(i=>{

    os = { 
      HostName : i.hostname,
     
      version : i.distro,
      relese : i.release,
      build : i.build,
      serial : i.serial,
      uptime : nodeos.uptime()
  }

})





 
  res.status(200).json(os)

return os;

}
