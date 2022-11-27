// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');
let cpuLoad;
let memTotal;
let memFree;
let memProc;





export default async function handler(req, res) {
  let HWUUID = "def";
 
 await si.mem(p=>{
    memTotal = p.total
    memFree = p.free
  })
 
  await  si.uuid(cb=>{
     HWUUID = cb.hardware
  })
 
 
  await  si.currentLoad(p=>{
    cpuLoad = p.currentLoad
  })
 
  await  si.cpu(i=>{
 
  res.status(200).json(
                {"HW":
                [
                    {
                        "uuid" : i.brand + " " + i.speed +"GHz " + i.physicalCores +"C/"+ i.cores +"T" ,
                        "cpuLoad": cpuLoad,
                        "memTotal": memTotal,
                        "HWUUID": HWUUID,
                        "memProc":  ((memTotal-memFree)/memTotal)*100,
                      
                    }
                ]
            
              }
    )


  }) 

}

