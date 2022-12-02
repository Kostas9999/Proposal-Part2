// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const si = require('systeminformation');




let netStats;

export default async function handler(req, res) {
  
  let localLatency;
  let publicLatency;


 
 
  si.networkGatewayDefault(defaultInt=>{ 
    si.inetLatency(defaultInt,response=>{
      localLatency = response;
    })
  })

    si.inetLatency(response=>{
      publicLatency = response;
    })


 await si.networkStats(s=>{  

  netStats = { 
    iface : s[0].iface,
    state : s[0].operstate,
    rx_total : s[0].rx_bytes,
    rx_Dropped : s[0].rx_dropped,
    rx_error : s[0].rx_errors,
    tx_total : s[0].tx_bytes,
    tx_Dropped : s[0].tx_dropped,
    tx_error : s[0].tx_errors,
    localLatency : localLatency,
    publicLatency : publicLatency,
}

  })


 
  res.status(200).json(netStats )      
return netStats;
}
