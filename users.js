var express = require('express');
var router = express.Router();
//const request = require('request');
var axios = require('axios');
//const fs = require('fs');

router.get("/", function(req, res)  { 
    axios({
        method:'get',
        url:'http://jsonplaceholder.typicode.com/users/',
        responseType:'json'
      })
      
        .then(function(response) {
          //console.log(response);
          res.send(response.data);
        })
        .catch((err) => {console.log('Error:', err);});   
});


/* // Using observable
router.get('/', (req, res, next)=>{
    let value = axios({
        method:'get',
        url:'http://jsonplaceholder.typicode.com/users/',
        responseType:'json'
    });

    from(value).subscribe(function(response) {res.send(response.data);});

});
 */

//using async wait
/* async function myAsyncFunction(res){
  try{
     let value =  await axios({
         method:'get',
         url:'http://jsonplaceholder.typicode.com/users/',
         responseType:'json'
     });

     res.send(value.data);

  }catch(err){
      console.error(err);
  }

}

router.get('/', (req, res, next)=>{
 myAsyncFunction(res);
});
 */
module.exports = router;
