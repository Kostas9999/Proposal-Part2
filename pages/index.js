

         import { Collapse, Text, Grid, Avatar, Link } from "@nextui-org/react";


let dataa;

 async function test() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/hello`)
   dataa = await res.json()
  
    // Pass data to the page via props
 return(dataa)
    
  }



export default function Home({data}) {



test()

  

 
console.log(dataa)

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
            title={<Text h4>Network</Text>}
           
          >
            {
           data.OS.map(name => {
              return(<>
              
              <Text h5>  Homedir: {name.net}</Text>
              
              
              
              </>)})
              }
          </Collapse>
          <Collapse
            title={<Text h4>Routes</Text>}
            subtitle={
              <Text>
               get routing table from pc
              </Text>
            }
            
          >

{


           
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
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
 const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { data } 
    
  }
  
}
