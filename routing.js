const express = require('express')
const app = express()
const port = 8000;
 app.use(express.json())
const user = [
  {
    "id": 1,
    "first_name": "ARAY",
    "last_name": "Singh"
},{
    "id": 2,
    "first_name": "vikram",
    "last_name": "Singh"
},
{
    "id": 3,
    "first_name": "ramesh",
    "last_name": "kumar"

}]

/***************************************GET*************************************** */

app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.json(user)
  })

/**************************************PUT******************************************** */

  app.put('/user/:id', (req,res) => {
      let id = req.params.id
      let first_name = req.body.first_name
      let last_name = req.body.last_name
 
     let index = user.findIndex((user) => {
        return (user.id == Number.parseInt(id))
     })
     if(index >= 0){
        let std = user[index]
       std.first_name = first_name
       std.last_name = last_name
       res.json(std)
     }else{
       res.status(404)
       res.end()
     }
    })
/****************************************DELETE****************************************** */
app.delete('/user/:id', (req, res) => {
  let id = req.params.id
  let index = user.findIndex((user) => {
    return (user.id == Number.parseInt(id))
 })
 if(index >= 0){
  let std = user[index]
  user.splice(index,1)
  res.json(std)
 }else{
   res.status(404)
 }
 })




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })