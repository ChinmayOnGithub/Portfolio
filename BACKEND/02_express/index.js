/**
 * @fileoverview This file sets up a basic Express.js server with three routes.
 * 
 * Express.js is a minimal and flexible Node.js web application framework that 
 * provides a robust set of features for web and mobile applications. It is 
 * designed for building single-page, multi-page, and hybrid web applications.
 * 
 * Routes:
 * - GET /: Responds with a welcome message.
 * - GET /ice-tea: Responds with a message about getting tea.
 * - GET /santa: Responds with a message about Christmas.
 * 
 * The server listens on port 3000.
 * 
 * To run the server with automatic restarts on file changes, use nodemon:
 * npm i -D nodemon
 * 
 * @requires express
 */
import express from 'express';
// Import the express module

// npm i -D nodemon : it automatically restart server on anychange
// -D stands for developer dependancies... which are not considered in the server (only to help the developer)


import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

const app = express();
const port = 3000;
app.use(express.json()) // using setting to accept the data in JSON format

let teaData = [];
let nextId = 1;


// app.use() used to mount middleware functions at specific path. 
// middleware function are fucntions that have access to req obj, res obj and next middleware function in the request-response cycle. They can call next middleware function.
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);




// to save the data we use the 'post method' , we can also do that with get but post is made for this

// add new tea
app.post("/tea", (req, res) => {
    logger.info("A post reqest was made to add a new tea")
    const { name, price } = req.body; // this is destructuring of the body (came from the user)
    //  we could have used the req.body.name but this is another method
    const newTea = {
        id: nextId++,
        name,
        price,
    };
    teaData.push(newTea);
    res.status(201).send(newTea);
})

// get all tea
app.get("/tea", (req, res) => {
    res.status(200).send(teaData);
})

// get a tea with id
app.get("/tea/:id", (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send("Tea not found")
    }
    res.status(200).send(tea)
})

// update tea
app.put("/tea/:id", (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send("Tea not found")
    }
    const { name, price } = req.body;
    tea.name = name;
    tea.price = price;

    res.status(200).send(tea);
})

// delete tea
app.delete("/tea/:id", (req, res) => {
    // const tea = teaData.find(t => t.id === parseInt(req.params.id))
    // if (!tea) {
    //     return res.status(404).send("Tea not found")
    // }
    // teaData = teaData.filter(t => t.id !== parseInt(req.params.id));
    // res.send("deleted successfully");


    const index = teaData.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.send(404).send("Tea not found");
    }

    teaData.splice(index, 1);
    return res.send(204).send("Tea deleted successfully");
})


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})