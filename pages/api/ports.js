// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const os = require('node:os');
const si = require('systeminformation');
const nodeCmd = require('node-cmd');

const nets = os.networkInterfaces();



export default async function handler(req, res) {

  
 
  nodeCmd.run('netstat -a -n -o', (err, data, stderr) => 
  {
    res.status(200).json(data)
  }
  )
  

  
 
  
}
