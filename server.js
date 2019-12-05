var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
//var Promise=require('promise')
// var destination = require('./modules/insertDestination');
// var User = require('./model/User');
var connection = require('./config/connection');
// var register = require('./modules/register');
var postWork = require('./modules/postWork');
var getWork = require('./modules/getWork');
var putWork = require('./modules/putWork');

var app = express()
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/getWork', async (req, res) => {
  var ObjQuerry = req.body;
  //you can query without any variable or with any of following variables
  /*
  =====================
  userName:string
  startTime:Date
  endTime:Date
  =====================
  */
  console.log(ObjQuerry)
  var result = await getWork.getWork(ObjQuerry);
  res.send(result);
})
app.post('/postWork', async (req, res) => {
  var ObjQuerry = req.body;
  //you can query without any variable or with any of following variables
  /*
  =====================
  userName:string
  startTime:Date
  endTime:Date
  =====================
  */

  var result = await postWork.postWork(ObjQuerry);
  res.send(result);
})
app.put('/putWork', async (req, res) => {
  var ObjQuerry = req.body;
  //you can query without any variable or with any of following variables
  /*
  =====================
  userName:string
  startTime:Date
  endTime:Date
  =====================
  */

  var result = await putWork.putWork(ObjQuerry);
  res.send(result);
})


// app.post('/register', function (req, res) {
//   //pass date as string use JSON.stringify(date);
//   /* variable required in req.body are
//   ========================
//   userName : String  (Mandatory)
//   startTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   endTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   purpose : String - (Not Mandatory)
//   ========================
//   */
//   var data = req.body;
//   var result = register.register(data);
//   res.send(result)
// })




// app.post('/insertDestination', function (req, res) {
//   //pass date as string use JSON.stringify(date);
//   /* variable required in req.body are
//   ========================
//   userName : String  (Mandatory)
//   startTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   endTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
//   purpose : String - (Not Mandatory)
//   ========================
//   */
//   var data = req.body;
//   var result = destination.destination(data);
//   res.send(result)
// })

var port = 4000;
app.listen(port, () => {
  console.log("Server created at port : " + port);
})

