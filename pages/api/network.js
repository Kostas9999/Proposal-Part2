// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');






export default async function handler(req, res) {

 
  si.networkInterfaces(i=>{
 
  res.status(200).json(
                {"network":
                [
                    {
                        "dnsSur" : i[1].dnsSuffix,
                        "speed" : i[1].speed,
                        "mac" : i[1].mac,
                        "IPv4" : i[1].ip4,
                        "IPv4Sub" : i[1].ip4subnet,
                        "IPv6" : i[1].ip6,
                        "IPv6Sub" : i[1].ip6subnet,
 
                    }
                ]
            
              }
    )


  })
}
