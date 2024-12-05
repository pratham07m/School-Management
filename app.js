require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database.js");
const Schools = require("./models/schools.js");


const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json())

//Add School
app.post("/api/addschool", async(req,res)=>{
    try {
        const {Schoolname , Schooladdress , coordinates} = req.body;

        const school = new Schools({
            Schoolname , Schooladdress , coordinates
        })

        await school.save();

        res.send("School Add Successfully");
    } catch (error) {
        res.status(400).send("Error to add Schools");
    }
})

//show all school
app.get("/api/listschool" , async(req , res)=>{
    const schools = await Schools.find({} , "Schoolname Schooladdress coordinates")
    res.send(schools)
})


// mongoDB connect + server start
connectDB()
    .then(() => {
        console.log("DataBase Connected");

        app.listen(PORT, () => {
            console.log(`server start on PORT : ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("DataBase Connection Error");
    });






