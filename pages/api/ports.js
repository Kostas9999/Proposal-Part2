// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//https://www.npmjs.com/package/systeminformation



const si = require('systeminformation');




export default async function handler(req, res) { 
  let list=[];
  let ports=[];
  await si.processes(processCB=>{  list = processCB.list  })



  await si.networkConnections(networkCB=>{
        networkCB.forEach(element => {
             if(element.state == "LISTEN"){    

                  for(const proc of list  ){

                  if(proc.pid  == element.pid)
                 

                        ports.push(
                        {
                        portNr : element.localPort,
                        procName : proc.name,
                        procPID : proc.pid,
                        procpath : proc.path
                        })
                  
                  }
                }
               
             })
            
            })

            res.status(200).json(ports)
           
           
}

