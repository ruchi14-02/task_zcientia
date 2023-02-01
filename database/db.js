var mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'template'
});
con.connect(function (error) {
    if (error){
        console.warn(error)

    }
    else{
        console.log(" database connected")
    }
   
})

con.query("select * from user",(err,result)=>{
    console.log("result" , result)
})
module.exports = con;