const express = require('express')
const app = express()
const server = require('http').createServer(app);

const bodyParser = require('body-parser')
app.use(bodyParser.json());

//basic get api with query string and query params
app.get('/', async (req, res) => {
    return res.status(200).json({message:"hello world"})
});

server.listen(process.env.PORT || 3000,()=>{
    console.log('server running...at 3000');
});