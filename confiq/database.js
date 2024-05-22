const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://precticehtml:YBduPfVeyoFZyqZH@pro4.etxt9x6.mongodb.net/?retryWrites=true&w=majority&appName=pro4/user');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log('database not connect!');
        return false
    }
    console.log('database connected successfully');
})

