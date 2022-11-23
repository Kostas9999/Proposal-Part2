// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const os = require('node:os');
const si = require('systeminformation');
const nodeCmd = require('node-cmd');

const nets = os.networkInterfaces();


const listening =[]

export default async function handler(req, res) {

 
  nodeCmd.run('netstat -a -n -o', (err, data, stderr) => 
  {
  
    const lines = data.split("\r\n")


    lines.map(res => {

     
      if(res.includes("LISTENING")){

        listening.push(res)

    }
    
   

    })


    res.status(200).json(listening)
 
  }
  )
  

  
 
  
}
