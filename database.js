// const{
//     createPool
// } = require('mysql')
// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "thinksys",
//     connectionLimit: 10
// })
// pool.query('select * from login', (err, result, field) => {
//     if(err){
//         return console.log(err);
//     }
//     else{
//         return console.log(result);
//     }
// })

const mysql =require('mysql');
var mysqlconnection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "thinksys"
});
mysqlconnection.connect((err) => {
    if(!err)
    /*insert*/// mysqlconnection.query('insert into login (id, username, password) VALUES (1,"VIKRAM","SINGH")' , (err, result, field) => {
    /*create*/mysqlconnection.query('create table registration (first_name varchar(100), last_name varchar(100), email varchar(100), password varchar(100), confirmpassword varchar(100), contact varchar(100))', (err,result,field) => {
    /*update*/// mysqlconnection.query('update login set username = "DURGESH", PASSWORD = "SINGH"  where id = 3' , (err,result,field) => {
    /*read*/ // mysqlconnection.query('select * from login', (err, result, field) => {  
    /*delete*///mysqlconnection.query('delete from login where id=?', [3] , (err, result, field) => {
            if(err){
                return console.log(err);
            }
            else{
                return console.log(result);
            }
        })
    else
    console.log('DB connection is not stablishing')
})


// //   mysqlconnection.connect((err) => {
// //     if(!err)
// //     {
// //       var sql = `insert into login (id, username, password) values (3, "${username}", "${password}")`;
// //       mysqlconnection.query(sql, (err,result,field) =>{
// //         if(!err)
// //         {
  
// //           console.log(result)
// //         }
// //         else{
// //           console.log(err)
// //         }
// //       })
// //     }
// //   })
  
// //   res.redirect( "/signup");
// //   })
