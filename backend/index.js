const express = require('express')
const app = express();
const port = 5000;
const conncectToMongo = require('./db');
conncectToMongo();

app.use(express.json())

app.use('/api/auth',require('./routes/UserLogin'))

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)

})