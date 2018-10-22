var express = require('express')
  , router = express.Router()

var index = {

  getHomePage: function(req, res) {
      res.render('index',
      {
         SiteParameter_PageTitle: 'Blockchain demo',

         partials:
         {
            Public_Header:'partials/publicheader',
            Public_Footer:'partials/publicfooter',
            Common_Header:'partials/commonheader',
            Common_Footer:'partials/commonfooter',
          }
      });
  },
  
  
  

  createProject: function(req, res) {
      res.render('createproject',
      {
         SiteParameter_PageTitle: 'Blockchain demo',

         partials:
         {
            Public_Header:'partials/publicheader',
            Public_Footer:'partials/publicfooter',
            Common_Header:'partials/commonheader',
            Common_Footer:'partials/commonfooter',
          }
      });
  },

  
  
  
  
  
  projectDetails: function(req, res) {
      res.render('projectdetails',
      {
         SiteParameter_PageTitle: 'Blockchain demo',

         partials:
         {
            Public_Header:'partials/publicheader',
            Public_Footer:'partials/publicfooter',
            Common_Header:'partials/commonheader',
            Common_Footer:'partials/commonfooter',
          }
      });
  },
  
  
  
  
  createTask: function(req, res) {
      res.render('createtask',
      {
         SiteParameter_PageTitle: 'Blockchain demo',

         partials:
         {
            Public_Header:'partials/publicheader',
            Public_Footer:'partials/publicfooter',
            Common_Header:'partials/commonheader',
            Common_Footer:'partials/commonfooter',
          }
      });
  },
      
	  
	  
	  
	  
  taskDetails: function(req, res) {
      res.render('taskdetails',
      {
         SiteParameter_PageTitle: 'Blockchain demo',

         partials:
         {
            Public_Header:'partials/publicheader',
            Public_Footer:'partials/publicfooter',
            Common_Header:'partials/commonheader',
            Common_Footer:'partials/commonfooter',
          }
      });
  }
      	  

};
  

  
router.get('/', index.getHomePage);
router.get('/createproject', index.createProject);
router.get('/projectdetails', index.projectDetails);
router.get('/createtask', index.createTask);
router.get('/taskdetails', index.taskDetails);


module.exports = router




