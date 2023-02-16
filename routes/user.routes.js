const user = require("./userRoute.js");
  
var router = require("express").Router();
  
router.get("/", user.findAll); 
    
router.get("/:id", user.findOne);
    
router.post("/", user.create); 

router.put("/:id", user.update);
  
router.delete("/:id", user.delete);
