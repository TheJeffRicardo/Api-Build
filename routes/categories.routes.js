const categories = require("./userRoute.js");
  
var router = require("express").Router();
  
router.get("/", categories.findAll); 
    
router.get("/:id", categories.findOne);
    
router.post("/", categories.create); 

router.put("/:id", categories.update);
  
router.delete("/:id", categories.delete);
