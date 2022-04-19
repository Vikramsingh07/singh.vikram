const express = require('express')
const cookieParser = require('cookie-parser')
const res = require('express/lib/response')
const app = express()
const port = 4000
console.log("hello world")
app.get('/', (req,res) => {
    res.send("hello world");
});
app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
