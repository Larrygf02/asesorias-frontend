var express = require('express');
var mysql = require("mysql");
//var router = express.Router();
const cors = require('cors')
const app = express()
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'db_asesorias'
})
const INSERT_USER = "INSERT INTO USUARIO (nombre, correo, password) values ('raul', 'raul@gmail.com', '123')";
const SELECT_USER = 'SELECT * FROM USUARIO'
connection.connect(err => {
    if(err) {
        return err;
    }
});
//console.log(connection)
app.use(cors())
app.get('/add', (req,res) => {
    connection.query(INSERT_USER, (err, results) => {
        if(err){
            console.log(err)
        }else{
            console.log(results)
        }
    })
    res.send('go to the users')
})
app.listen(4000, () => {
    console.log('hola')
})

