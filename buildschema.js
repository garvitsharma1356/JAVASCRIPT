
import mongoose from "mongoose";

// name, accountNumber, city, age, balance, accountType

const userSchema = new mongoose.Schema({
   name:{
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    required: true
   },
   accountNumber:{
    type: Number,
    required: true,
    unique: true,
    index: true,
   },
   city:{
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
   },
   age:{
    type:Number,
    min: 18,
    max:100
   },
   balance:{
    type:Number,
    min:0,
    required: true
   },
   accountType:{
    type:String,
    required: true,
    enum: ["current","saving"],
    default: "saving"
   }
},{timestamps:true});


const Customer = mongoose.model("Customer",userSchema);
// customers : collection build hojayega
export default Customer;