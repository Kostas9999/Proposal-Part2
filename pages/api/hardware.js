// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');
let totmem ="";





export default async function handler(req, res) {
  si.mem(p=>{
    totmem = p.total
  })
 
  si.cpu(i=>{
 
  res.status(200).json(
                {"HW":
                [
                    {
                        "uuid" : i.brand + " " + i.speed +"GHz " + i.physicalCores +"C/"+ totmem +"T" 
                    }
                ]
            
              }
    )


  }) 
}
