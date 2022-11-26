// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');






export default async function handler(req, res) {
  
  let test;
  let intDeff;
 
 






  si.networkInterfaces(i=>{

    for(const s of i){

      if(s.default){
 
  res.status(200).json(
                {"network":
                [
                    {
                        "iface" : s.iface,
                        "speed" : s.speed,
                        "mac" : s.mac,
                        "IPv4" : s.ip4,
                        "IPv4Sub" : s.ip4subnet,
                        "IPv6" : s.ip6,
                        "IPv6Sub" : s.ip6subnet,
 
                    }
                ]
            
              }
    )
            }}

  })
}
