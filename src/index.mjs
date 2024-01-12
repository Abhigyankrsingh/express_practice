import express, { response } from 'express';

const app = express();


const PORT = process.env.PORT || 3000;


app.get("/", (request, response) =>{

    response.status(202).send({msg: "Hello"});

});

app.get("/api/users",(request, response) =>{
   response.send([
  {id:1,  username: "abhi" , displayName: "Abhi"},

  {id:2, username: "singh", displayName: "Singh"},

  {id:3, username: "Jio", displayName: "JIO"}


   ]);
} );


app.listen(PORT, () =>{

    console.log(`Running on Port ${PORT}`);
});


//localhost:3000

//localhost:3000/products

//GET, POST, DELETE, PATCH
