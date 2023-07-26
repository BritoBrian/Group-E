const express=require('express');
const route=express.Router();

// Route to connect to homepage
route.get('/',services.homeroutes);

// Route to connect to add_user page
route.get('/add-user',services.add_user);

route.get('/update-user', services.update_user);

route.get('/search',services.homeroutes);
//API to fetch the names

//API to fetch the names
route.get('/:id',services.search);
// API post to create users
route.post('/api/users',controller.create);