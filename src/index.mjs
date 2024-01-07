import express from 'express';

const app = express();


const PORT = process.env.PORT || 3000;


app.get("/", (request, response) =>{

    response.status(201).send({msg: "Hello"});

});


app.listen(PORT, () =>{

    console.log(`Running on Port ${PORT}`);
});


//localhost:3000

//localhost:3000/products

//GET, POST, DELETE, PATCH
