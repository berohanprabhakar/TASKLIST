const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in the routes module
app.get('/', function(req,res){
    fs.readdir('./files',function(err,files){
    res.render('index',{files, files});
    })
    
});

app.post('/create', function(req,res){
    
    // taking the titlename and titledetail from form
    fs.writeFile('./files/${req.body.title.split(' ').join('')}', )
    console.log(req.body);
    
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
