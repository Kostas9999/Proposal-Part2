//require('./db_Clear_db');

import { connection } from './db_Clear'
//import HWUUID from './hardware'
const hw =  require('./hardware')

export default function Handler(res, response) {

 

console.log( hw)

  connection.query(
    "SELECT * FROM machine;",
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      
    }
  );
  
 
  }
 // INSERT INTO `groupproject`.`machine` (`id`, `userID`) VALUES ('2', '2');
 //SELECT `id`, `userID` FROM `groupproject`.`machine` WHERE  `id`=2;