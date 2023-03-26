const express = require('express');
const bodyParser = require("body-parser");
const studentRouter = require("./routes/student")


const app = express();

app.use(bodyParser.json());
app.use(studentRouter)


app.listen(6000, ()=>{
    console.log("Running a port on 6000")
})