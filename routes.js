const express=require('express');
const route=express.Router();
const userController=require('./controller/userController');

route.get('/',userController.homePage)
route.get('/about',userController.aboutPage)
route.get('/about-us',userController.aboutUsPage)
route.post('/add-new-user',userController.addNewUser)
route.get('/*',userController.notFoundPage)
module.exports=route;