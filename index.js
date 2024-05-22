const express = require('express');
const db = require ('./confiq/database')
const userDB = require ('./models/usertbl')

const app = express();

app.use(express.urlencoded());

app.set("view engine", "ejs");


app.get('/', (req, res) => {
   return res.render('data')
})

app.get('/buy', (req, res) => {
    return res.render('./pages/buy')
})
app.get('/buy1', (req, res) => {
    return res.render('./pages/buy1')
})
app.get('/buy2', (req, res) => {
    return res.render('./pages/buy2')
})
app.get('/buy3', (req, res) => {
    return res.render('./pages/buy3')
})


app.post('/insertData',(req,res)=>{
    const {name,price}=req.body;
    userDB.create({
        name : name,
        // title:title,
        price : price
    }).then((user)=>{
        console.log('data successfull insert..');
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err);
        return false
    })

  
})


app.listen(8081,(err)=>{
    if(!err){
        console.log('server Started. :http://localhost:8081');
    }
})