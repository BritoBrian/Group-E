const express=require('express');
const app=express();
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const path=require('path');

const connectDb=require('./server/databases/connection');

const host='0.0.0.0';
app.use(bodyparser.urlencoded({extended:true}));


app.use(morgan('tiny'));

//Make static directory to use html, js and css files
app.use('/css',express.static(path.resolve(__dirname,'html/css')));
app.use('/img',express.static(path.resolve(__dirname,'html/img')));
app.use('/js',express.static(path.resolve(__dirname,'html/js')));

module.exports.dotenv_path=dotenv.config({path:'config.env'});


app.set('view engine','ejs');
const port=process.env.PORT || 80;

app.listen(port,()=>{console.log(`Server is running on port:${port}`)});