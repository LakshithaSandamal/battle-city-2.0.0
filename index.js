const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/'));
});
app.get('/assets',(req,res)=>{
    res.sendFile(path.join(__dirname,'server/assets.json'));
});
app.get('/level/:level',(req,res)=>{
    res.sendFile(path.join(__dirname,`server/level/${req.params.level}.json`))
});
app.all('*',(req,res)=>{
    res.send('Page not Found !');
})

http.listen(port , ()=>{
    console.log(`Server listen http://localhost:${port}/`)
});
