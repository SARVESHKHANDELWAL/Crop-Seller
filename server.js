const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require('path');


//import the route


const users=require('./routes/api/users');

const passport=require('passport');
const app=express();
//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//db connect
mongoose.connect("mongodb://localhost:27017/CropSellerDB",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("server connected")).catch(err=>console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);



app.use('/api/users',users);

//Server static assets if in prodution
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

//app listen
app.listen(3000||process.env.PORT,()=>{
    console.log("server running on 3000.");
})