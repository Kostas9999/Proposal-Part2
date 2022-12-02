

         import { Collapse, Text, Grid, Avatar, Link } from "@nextui-org/react";
   //      const nodeCmd = require('node-cmd');
       
     




export default function Home({hw_data,os_data, network_data,networkStats_data, routes_data, ports_data}) {




 

  return (
      
      <>
         <br></br> <br></br>



         <Grid.Container gap={2}>
      <Grid >
        <Collapse.Group shadow>

        <Collapse
            title={<Text h4>Hardware</Text>}
          >
                   {           
                          <>
                          <Text h5> CPU: {hw_data.uuid}<br></br>                
                          Total Memory: {hw_data.memTotal} <br></br>
                          Memory Usage: {hw_data.memProc} %<br></br>
                          UUID: {hw_data.HWUUID} <br></br>            
                          </Text>                  
                          </>                       
                   } 
          </Collapse>
       
          <Collapse
            title={<Text h4>Operating System</Text>}
          >
                  {            
                          <>
                          <Text h5> HostName: {os_data.HostName}<br></br>
                          OS: {os_data.version} <br></br>
                        
                          Relese: {os_data.relese}<br></br>
                          OS build: {os_data.build}<br></br>
                          Serial: {os_data.serial} <br></br>
                          Uptime: {os_data.uptime} <br></br>
                          </Text>                  
                          </>                 
                  } 
          </Collapse>
          
          <Collapse
            title={<Text h4>Network Interfaces</Text>}
           
          >
             
            {
          
                <>
                <Text h5> Interface: {network_data.iface}<br></br>
                Speed: {network_data.speed} MB/s<br></br>
                MAC: {network_data.mac} <br></br><br></br>
                IPv4: {network_data.IPv4} <br></br>
                IPv4 Mask: {network_data.IPv4Sub} <br></br>
                <br></br>
                IPv6: {network_data.IPv6} <br></br>
                IPv6 Mask: {network_data.IPv6Sub} <br></br>         
                </Text>                  
                </>
       
              }
             
          </Collapse>

          <Collapse
            title={<Text h4>Network Stats</Text>}
           
          >
             
            {
          
                <>
                <Text h5> Interface: {networkStats_data.iface}<br></br>
                State: {networkStats_data.state}<br></br>
                <br></br>
                rx_total: {networkStats_data.rx_total} <br></br>
                rx_Dropped: {networkStats_data.rx_Dropped} <br></br>
                rx_error: {networkStats_data.rx_error} <br></br>
                <br></br>
                tx_total: {networkStats_data.tx_total} <br></br>
                tx_Dropped: {networkStats_data.tx_Dropped} <br></br>
                tx_error: {networkStats_data.tx_error} <br></br>
                <br></br>
                localLatency: {networkStats_data.localLatency} ms <br></br>
                publicLatency: {networkStats_data.publicLatency} ms <br></br>         
                </Text>                  
                </>
      
              }
             
          </Collapse>

          <Collapse
            title={<Text h4>Ports (Listening)</Text>}
          >

{

ports_data.map(data => {
  return(  
  <Text h6>: {data.portNr} : {data.procName} :{data.procPID} : {data.procpath}</Text>  
  )})

  
}
            
          </Collapse>
         


          <Collapse
            title={<Text h4>ARP</Text>}
          >
{

routes_data.map(data => {
  return(  
  <Text h6>{data}</Text>  
  )})
}            
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>












         
         <br></br> <br></br>
           
          
             
             <br></br> <br></br>
            
            
            </>
       
  )
}

// This gets called on every request
export async function getServerSideProps() {

 //nodeCmd.run('netstat -a -n -o', (err, data, stderr) => console.log(data));
 //nodeCmd.run('netstat -r', (err, data, stderr) => console.log(data));
 //nodeCmd.run('tasklist /svc /FI "PID eq 5256"', (err, data, stderr) => console.log(data));

  // Fetch data from external API
  const hw = await fetch(`http://localhost:3000/api/hardware`)
 const hw_data = await hw.json()

 const os = await fetch(`http://localhost:3000/api/os`)
 const os_data = await os.json()


 const network = await fetch(`http://localhost:3000/api/network`)
 const network_data = await network.json()

 const networkStats = await fetch(`http://localhost:3000/api/networkStats`)
 const networkStats_data = await networkStats.json()

 const routes = await fetch(`http://localhost:3000/api/routes`)
 const routes_data = await routes.json()

 const ports = await fetch(`http://localhost:3000/api/ports`)
 const ports_data = await ports.json()


 //console.log(ports_data)
/*

let interval = 10000;

setInterval(
 await call,interval
)

async function call(){
  const ports = await fetch(`http://localhost:3000/api/ports`)
  const ports_data = await ports.json()
  
  console.log(ports_data)
  console.log(ports_data.length)
  if(ports_data.length > 0){interval =1000000}
}
*/

  // Pass data to the page via props
  return { 
    props: { 
      hw_data: hw_data,
    os_data: os_data,
    network_data:network_data,
    networkStats_data:networkStats_data, 
    routes_data:routes_data,
    ports_data:ports_data,

     
  } 
    
  }
  
}
