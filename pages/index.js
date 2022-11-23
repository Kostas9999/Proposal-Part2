

         import { Collapse, Text, Grid, Avatar, Link } from "@nextui-org/react";
         const nodeCmd = require('node-cmd');
       





export default function Home({data, routes_data, ports_data, tasks_data }) {




  

 

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
             data.OS.map(name => {
              return(
                <>
                <Text h5> HostName: {name.HostName}<br></br>
                 CPU: { name.cpu} <br></br>
                 Free Memory: {(name.freemem)/1000000000} GB<br></br>
                 Total Memory: {(name.totmem)/1000000000} GB <br></br>
                 OS: {name.version} <br></br>
                 Platform: {name.platform} <br></br>
                 Relese: {name.relese}<br></br>
                 OS Type: {name.type}<br></br>
                 Uptime: {name.uptime} sec<br></br>
                 UserName: {name.userInfo}   <br></br>   
                 Homedir: {name.homedir}</Text> 
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
           data.OS.map(name => {
              return(<>              
              <Text h5>  Homedir: {name.net}</Text>
              </>)})
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
            
        
             
        </>
  )
}

// This gets called on every request
export async function getServerSideProps() {

 //nodeCmd.run('netstat -a -n -o', (err, data, stderr) => console.log(data));
 //nodeCmd.run('netstat -r', (err, data, stderr) => console.log(data));
 //nodeCmd.run('tasklist /svc /FI "PID eq 5256"', (err, data, stderr) => console.log(data));

  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/os`)
 const data = await res.json()

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
      data: data,
    routes_data:routes_data,
    ports_data:ports_data,
    tasks_data:tasks_data  
  } 
    
  }
  
}
