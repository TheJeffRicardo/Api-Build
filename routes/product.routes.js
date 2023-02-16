const product = require("./userRoute.js");
  
var router = require("express").Router();
  
router.get("/", product.findAll); 
    
router.get("/:id", product.findOne);
    
router.post("/", product.create); 

router.put("/:id", product.update);
  
router.delete("/:id", product.delete);
