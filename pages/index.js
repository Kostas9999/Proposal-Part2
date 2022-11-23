

         import { Collapse, Text, Grid, Avatar, Link } from "@nextui-org/react";
         const nodeCmd = require('node-cmd');
       
         import {SSRProvider} from 'react-aria';




export default function Home({hw_data,os_data, network_data,routes_data, ports_data, tasks_data }) {




 

  return (
      
      <SSRProvider>
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
                          OS: {name.version} <br></br>
            
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
                          Platform: {name.platform} <br></br>
                          Relese: {name.relese}<br></br>
                          OS build: {name.build}<br></br>
                          Serial: {name.serial} <br></br>
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
                <Text h5> DNS Surffix: {name.dnsSur}<br></br>
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
            title={<Text h4>ARP</Text>}
          >

{

routes_data.map(data => {
  return(  
  <Text h6>{data}</Text>  
  )})
}


            
          </Collapse>
          <Collapse
            title={<Text h4>Ports (Listening)</Text>}
          >

{

ports_data.map(data => {
  return(  
  <Text h6>{data}</Text>  
  )})

  
}
            
          </Collapse>
          <Collapse
            title={<Text h4>Tasklist</Text>}
          >
{

tasks_data.map(data => {
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
            
             </SSRProvider>
             
       
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

 const routes = await fetch(`http://localhost:3000/api/routes`)
 const routes_data = await routes.json()

 const ports = await fetch(`http://localhost:3000/api/ports`)
 const ports_data = await ports.json()

 const tasks = await fetch(`http://localhost:3000/api/tasks`)
 const tasks_data = await tasks.json()

 //console.log(routes_data)

 nodeCmd.run('ping 192.168.11.1', (err, data, stderr) => 
 {
 //  console.log(data)
 }
 )









  // Pass data to the page via props
  return { 
    props: { 
      hw_data: hw_data,
    os_data: os_data,
    network_data:network_data,
    routes_data:routes_data,
    ports_data:ports_data,
    tasks_data:tasks_data  
  } 
    
  }
  
}
