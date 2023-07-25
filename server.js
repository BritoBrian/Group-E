const express=require('express');
const app=express();
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const path=require('path');

const host='0.0.0.0';
app.use(bodyparser.urlencoded({extended:true}));