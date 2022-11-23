// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const os = require('node:os');
const si = require('systeminformation');
const nodeCmd = require('node-cmd');

const nets = os.networkInterfaces();


const listeningAll =[]
const listeningIPv4 =[]
const listeningIPv6 =[]

export default async function handler(req, res) { 
  nodeCmd.run('netstat -a -n -o', (err, data, stderr) => 
  {  
    const lines = data.split("\r\n")
    lines.map(res => {
      if(res.includes("LISTENING")){
        listeningAll.push(res)

        if(res.includes("]")){
          listeningIPv6.push(res)
        }
        else{
          listeningIPv4.push(res)
        }

    }
    })
    res.status(200).json(listeningAll) 
  }
  )  
}

