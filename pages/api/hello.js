// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const os = require('node:os');
const si = require('systeminformation');

const nets = os.networkInterfaces();

si.cpuTemperature()
  .then(data => {
    console.log('CPU Information:');
    console.log('- manufacturer: ' + data.cores);

  })
  .catch(error => console.error(error));

export default function handler(req, res) {
  res.status(200).json(
    {"OS":
    [
        {
            "HostName" : os.hostname(),
            "freemem" : os.freemem(),
            "totmem" : os.totalmem(),
            "platform" : os.platform(),
            "version" : os.version(),
            "relese" : os.release(),
            "type" : os.type(),
            "uptime" : os.uptime(),
          "userInfo" : os.userInfo().username,
          "homedir" : os.userInfo().homedir,
          "net" : JSON.stringify(nets),

          "cpu" : JSON.stringify(os.cpus()[0].model),
          "cputemp" : si.cpu().cores
          
        }
    ]
    
  
  }
    
    )
}
