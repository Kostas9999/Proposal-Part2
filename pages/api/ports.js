// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//https://www.npmjs.com/package/systeminformation



const si = require('systeminformation');


let list=[];

export default async function handler(req, res) { 

  si.processes(processCB=>{  
    list = processCB.list

  si.networkConnections(networkCB=>{
    networkCB.forEach(element => {
    if(element.state == "LISTEN"){

console.log(list[6])

    //  let obj = list.find(o => o.pid === networkCB.pid);

     // console.log(obj);

     // console.log(element.localPort +"\t"+element.state+"\t"+element.pid+"\t"+obj.name)
    }


    
   });
      
  })

})

}

