let  networkInterace = require('./network');

async function dosmth(){
let networkInt;
    


   await  networkInterace().then((data)=>{(networkInt = data)})
    console.log(networkInt)

}

dosmth();
