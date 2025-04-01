const express=require('express');
const app=express();
const routes=require('./routes');
require('./mongoose');

app.set('view engine','ejs');
app.use(routes);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(2500,(req,res)=>{
    console.log('There is a request to port 2500')
})