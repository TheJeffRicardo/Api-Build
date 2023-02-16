const express = require("express") //Used to set up a server 
const cors = require("cors") //used to prevent errors when working locally

const app = express() //Initialize express as an app variable
app.set("PORT", process.env.PORT || 6969) //Set the PORT
app.use(express.json()) //Enable the sever to handle JSON requests
app.use(cors()) //Don't let local development give errors

//This is where we check URLs and Request methods to create functionality
//This "/" will be your application's home page
app.get("/", (req, res)=>{
    res.json({message: "Welcome to Forever"})
})

//Setting up app listening for API calls
app.listen(app.get("PORT"), () => {
    console.log(`Listening for calls on port ${app.get("PORT")}`);
    console.log("Press Ctrl+C to exit server");
    });

    

