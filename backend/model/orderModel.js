import mongoose from "mongoose";

const orderModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: { type: String, require: true },
            qty: { type: Number, require: true },
            image: { type: String, required: true },
            price: { type: Number, require: true },
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true }
        }
    ],
    shippingAddress: {
        address: { type: String, require: true },
        city: { type: String, require: true },
        postalCode: { type: String, require: true },
        country: { type: String, require: true },
    },
    paymentMethod: {
        type: String,
        require: true
    },
    paymentStatus: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, {
    timestamps: true
})

const order = mongoose.model('Order', orderModel, 'Order')

export default order