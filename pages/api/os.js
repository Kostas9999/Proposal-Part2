// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');






export default async function handler(req, res) {

 
  si.osInfo(i=>{
 
  res.status(200).json(
                {"OS":
                [
                    {
                        "HostName" : i.hostname,
                        "platform" : i.platform,
                        "version" : i.distro,
                        "relese" : i.release,
                        "build" : i.build,
                        "serial" : i.serial,
                    }
                ]
            
              }
    )


  })
}
