const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


//write your code 

//Method GET 
  app.get('/user',(req,res)=>{
    res.json({message:"Hello "+ req.param('name')});
}) 

/* Method POST >> test by tool postman ,then writ in body (
    {
        "message":"Hello",
        "name":"Noor"
    } )
*/    

app.post('/user',(req,res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

