import Product from "../models/productModels.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(product);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createProduct = async (req,res) => {
    try {
        await Product.create(req.body);
        const products = await Product.findAll();
        res.json({
            "message" : "Product created.",
            products
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateProduct = async (req,res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const products = await Product.findAll();
        res.json({
            "message" : "Product updated.",
            products
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteProduct = async (req,res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        const products = await Product.findAll();
        res.json({
            "message" : "Product deleted.",
            products
        });
    } catch (error) {
        res.json({message: error.message});
    }
}