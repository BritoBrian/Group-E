const axios=require('axios');
const userDb=require('../model/model.js');

// create a service to render homepage
const homeroutes=(req,res)=>{
    const db=userDb.find({}).then(data=>
    axios.get('http://0.0.0.0:8000/api/users').then((resp)=>{
        console.log(resp.data);
        res.render('index',{users:resp.data})}).catch(e=>res.send(e)));

}