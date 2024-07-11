const Products = require("../models/productModel");

// Function to add new product
async function addProduct(req,res){
    console.log("req.body getProduct", req.body);
    try{
        const newProduct = new Products(req.body);
        // console.log(newProduct);
        const result = await newProduct.save();
        // console.log(result);
        res.status(200).send({message:"Product Added Successfully...", task:result});
    } catch {
        res.status(500).send(error);
    }
}

// Function to get all products
async function getAllProducts(req,res){
    console.log("......");
    try{
        result = await Products.find({},{__v:0});
        console.log(result);
        res.status(200).send(result);
    } catch {
        res.status(500).send(error);
    }
}

// Function to find products 
async function getWithQuery(req,res){
    console.log(req.query);

    Category = req.query.CATEGORY,
    Price = req.query.price,
    Name = req.query.NAME

    try{
        result = await Products.find({category:Category, price:Price, name:Name});
        res.status(200).send(result);
    } catch (error){
        res.status(500).send(error);
    }
}

// Function to delete a product
async function deleteProduct(req,res){
    console.log(req.params.id);
    try{
        const product = await Products.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(404).send({message:"Product not found"});
        }
        res.send({task:product, message:"Product deleted"})
    } catch(error) {
        res.status(500).send(error);
    }
}

// Function to update a product
async function updateProduct(req,res){
    console.log("updateProduct req,params.id", req.params.id);
    console.log("updateProduct req.body", req.body);
    // console.log(req.params.id, req.body,{new : true});
    try {
        const product= await Products.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        
        if (!product) {
            res.status(404).send({message:"Product not update"});
        }
        res.status(200).send({message:"Product Updated Successfully", task:product});
    } catch (error) {
        res.status(500).send(error);
    }
}

// required modules
module.exports = {
    getAllProducts,
    addProduct,
    getWithQuery,
    deleteProduct,
    updateProduct
}