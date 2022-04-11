const express = require('express')
const cookieParser = require('cookie-parser')
// const cookieValidator = require('./cookieValidator')
const app = express()
const port = 19000
/***************************************middleware******************************************/
// const myName = function(req,res,next)
// {
// console.log('MY NAME IS VIKRAM SINGH')
// next()
// }

// const requestTime = function(req, res, next)
// {
//     req.requestTime = Date.now()
//     next()
// }

// app.use(myName)
// app.use(requestTime)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
//   })


// **********************************************************************************************
// app.use((req,res,next) => {
//     console.log('time:', Date.now())
//     next()
// })
// app.use('/user/:id', (req,res,next) => {
//     console.log('request Type:' , req.method)
//     next()
// })

// app.get('/user/:id', (req, res,next) => {
//     res.send('USER')
//   })

// ********************************************************************************************
// app.use('/user/:id',(req,res,next) => {
//     console.log('request url:', req.originalUrl)
//     next()
// }, (req,res,next) =>{
//     console.log('REQUEST TYPE:' , req.method)
//     next()
// })
// app.get('/user/:id', (req, res, next) => {
//     console.log('ID:', req.params.id)
//     next()
//   }, (req, res, next) => {
//     res.send('User Info')
//   })
  
  
//   app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id)
//   })

// ***********************************IF ELSE*********************************************************
// app.use('/user/:id',(req,res,next) => {
//   console.log('ID: ', req.params.id)
//   next()
// })
// app.get('/user/:id', (req, res, next) => {
  
//   if (req.params.id === '0')
//    next('route')
//   else next()
// }, (req, res, next) => {

//   res.send('regular')
// })


// app.get('/user/:id', (req, res, next) => {
//   res.send('special')
// })
/***************************************ARRAY************************************************/
  // function logoriginalurl (req,res,next) {
  //   console.log('REQUEST URL:', req.originalUrl)
  //   next()
  // }

  // function logmethod (req,res,next) {
  //   console.log('REQUEST TYPE: ' , req.method)
  //   next()
  // }

  // const logstuff = [logoriginalurl,logmethod]
  // app.get('/user/:id', logstuff, (req,res,next) => {
  //   res.send('user info')
  // })
  /***************************************third party middleware***************************/

  // app.use(cookieParser())

  // app.get('/', function(req,res) {
  //   console.log('Cookies:', req.cookies)

  //   console.log('signed Cookies:', req.signedCookies)
  // })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})