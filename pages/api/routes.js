// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const os = require('node:os');
const si = require('systeminformation');
const nodeCmd = require('node-cmd');

const cp = require('child_process');

const nets = os.networkInterfaces();


/*

if (_windows) {
  // https://www.inetdaemon.com/tutorials/internet/ip/routing/default_route.shtml
  let defaultIp = '';
  const cmd = 'netstat -r';
  const result = cp(cmd, util.execOptsWin);
  const lines = result.toString().split(os.EOL);
  lines.forEach(line => {
    line = line.replace(/\s+/g, ' ').trim();
    if (line.indexOf('0.0.0.0 0.0.0.0') > -1 && !(/[a-zA-Z]/.test(line))) {
      const parts = line.split(' ');
      if (parts.length >= 5) {
        defaultIp = parts[parts.length - 2];
      }
    }
  });
  if (defaultIp) {
    for (let dev in ifaces) {
      if ({}.hasOwnProperty.call(ifaces, dev)) {
        ifaces[dev].forEach(function (details) {
          if (details && details.address && details.address === defaultIp) {
            ifacename = dev;
          }
        });
      }
    }
  }
}
*/


export default async function handler(req, res) {



  const result = nodeCmd.run('netstat -r', (err, data, stderr) => {return {data}})
 
  

 
  nodeCmd.run('arp -a', (err, data, stderr) => 
  {
    const lines = data.split("\r\n")
  
    

    res.status(200).json(lines)
      
  }
  )
  

  
 
  
}
