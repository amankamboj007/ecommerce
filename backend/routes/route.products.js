import express from "express";
import mongoose from "mongoose";
import Product from "../model/productModel.js"
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)

    }

})

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await Product.findOne({ _id: req.params.id })
        if (product) {
            console.log(product)
            res.status(200).send(product)
        } else {
            throw new Error("Not Found")
        }
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})



export default router