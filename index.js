import dotenv from "dotenv";
dotenv.config();


import express from "express";
import mongoose from "mongoose";
import Customer from "./buildschema.js";
import Users from "./data.js";

const app = express();


await mongoose.connect(process.env.MONGO_URI);
app.use(express.json());


// create customer 
app.post("/customer",async (req,res)=>{
    const customer = await Customer.create(req.body);
    res.json({
        message: "all user information created ",
        customer: customer
    })
})


//create customer in bulk
app.post("/customer/bulk",async (req,res)=>{
    const customer = await Customer.insertMany(Users);
    res.json({

        message: "all user information created successfully",
        customer: customer
    })
})


// got all information of users
app.get("/customer",async (req,res)=>{
    const customer = await Customer.find();
    res.json({
        message: "got information of user  ",
        customer: customer
    })
})


app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})
//testing contri//