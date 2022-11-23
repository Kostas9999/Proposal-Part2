// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');
let totmem ="";

si.cpu(i=>{
  totmem = i.total
})



export default async function handler(req, res) {

 
  si.cpu(i=>{
 
  res.status(200).json(
                {"HW":
                [
                    {
                        "uuid" : i.brand + " " + i.speed +"GHz " + i.physicalCores +"C/"+ i.cores +"T" 
                    }
                ]
            
              }
    )


  })
}
