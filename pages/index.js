

export default function Home({data}) {



  return (
        <>
         <Navbar />
         <br></br> <br></br>

           
            {
             data.OS.map(name => {
              return(
                <>
                <br></br>


               <h3> HostName: {name.HostName}</h3>
                
                <br></br>
                CPU: { name.cpu}
                
                <br></br>

               Free Memory: {(name.freemem)/1000000000} GB
               <br></br>
               Total Memory: {(name.totmem)/1000000000} GB

               <br></br>
                OS: {name.version}
                <br></br>
                Platform: {name.platform}
                
                <br></br>
                Relese: {name.relese}
                <br></br>
               OS Type: {name.type}
                <br></br>
                Uptime: {name.uptime} sec
                <br></br>
                UserName: {name.userInfo} 
                <br></br>
                UserName: {name.homedir}

                <br></br><br></br>
                Network: <br></br>{ name.net}

                
                
                
                </>
              )
             }
              
              )
            } 
             
             <br></br> <br></br>
            
        <Footer/>
             
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
