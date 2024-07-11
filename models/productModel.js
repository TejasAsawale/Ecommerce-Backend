const mongoose = require('mongoose'); // import the module

// create new schema for the product
const productSchema = mongoose.Schema({
    name:{type:String, required:false},
    description:{type:String, required:false},
    category:{type:String, required:false},
    price:{type:Number},
    quantity:{type:Number}
})

// Create new collection
module.exports = mongoose.model("Product",productSchema);
// module.exports = Products;

// Sample JSON data to add 
// {
// "name":"Mobile",
//     "description":"sssfdfddffffssavv",
//     "category":"Electronic Device",
//     "price":1000,
//     "quantity":10
// }