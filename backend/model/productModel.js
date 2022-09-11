import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true }

},
    {
        timestamps: true
    })

const ProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    name:{
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    countInStocks: {
        type: Number,
        default: 0,
        require: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema, 'Product')

export default Product