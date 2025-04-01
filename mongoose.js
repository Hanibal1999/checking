const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://hanibalmulugeta:Jositey2011@cluster0.8f7dwie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then (()=>{
    console.log('DB is connected')
})
.catch(err=>{
    console.log(err)
});