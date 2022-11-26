

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
             hw_data.HW.map(name => {
                        return(
                          <>
                          <Text h5> CPU: {name.uuid}<br></br>
                
                          Total Memory: {name.memTotal} <br></br>
                          Memory Usage: {name.memProc} %<br></br>
                          UUID: {name.HWUUID} <br></br>
            
                          </Text>                  
                          </>
                        )
                   }              
                  )
                  } 
          </Collapse>
       
          <Collapse
            title={<Text h4>Operating System</Text>}
          >
        {
             os_data.OS.map(name => {
                        return(
                          <>
                          <Text h5> HostName: {name.HostName}<br></br>
                          OS: {name.version} <br></br>
                          UUID: {name.platform} <br></br>
                          Relese: {name.relese}<br></br>
                          OS build: {name.build}<br></br>
                          Serial: {name.serial} <br></br>
                          Uptime: {name.uptime} <br></br>
                          </Text>                  
                          </>
                        )
                   }              
                  )
                  } 
          </Collapse>
          
          <Collapse
            title={<Text h4>Network Interfaces</Text>}
           
          >
             
            {
           network_data.network.map(name => {
           
              return(
                <>
                <Text h5> Interface: {name.iface}<br></br>
                Speed: {name.speed} MB/s<br></br>
                MAC: {name.mac} <br></br><br></br>
                IPv4: {name.IPv4} <br></br>
                IPv4 Mask: {name.IPv4Sub} <br></br>
                <br></br>
                IPv6: {name.IPv6} <br></br>
                IPv6 Mask: {name.IPv6Sub} <br></br>         
                </Text>                  
                </>
              )
         }              
        )
              }
             
          </Collapse>

          <Collapse
            title={<Text h4>Network Stats</Text>}
           
          >
             
            {
           networkStats_data.networkStats.map(name => {
           
              return(
                <>
                <Text h5> Interface: {name.iface}<br></br>
                State: {name.state}<br></br>
                <br></br>
                rx_total: {name.rx_total} <br></br>
                rx_Dropped: {name.rx_Dropped} <br></br>
                rx_error: {name.rx_error} <br></br>
                <br></br>
                tx_total: {name.tx_total} <br></br>
                tx_Dropped: {name.tx_Dropped} <br></br>
                tx_error: {name.tx_error} <br></br>
                <br></br>
                localLatency: {name.localLatency} ms <br></br>
                publicLatency: {name.publicLatency} ms <br></br>         
                </Text>                  
                </>
              )
         }              
        )
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
