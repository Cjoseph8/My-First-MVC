const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const URL =process.env.DATABASE;
const farmRouter = require('./router/farmRouter')

const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome to my api")
})

app.use(farmRouter);

mongoose.connect(URL)
.then(()=>{
    console.log('Database connected successfully.')
}).catch((err)=>{
    console.log('Error connecting to Database:', err.message);
});

app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
});

