import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./model/productModel.js";
import User from "./model/userModel.js";

dotenv.config()

const connection = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://ishopmern:Aman123@cluster0.urqazef.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(con.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const importData = async () => {

    try {
        console.log("Sampledata added")
        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        console.log(sampleProducts)
        await Product.insertMany(sampleProducts)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
if (process.argv[2] == '-d') {
    await connection()
    destroyData()
}
else {
    await connection()
    importData()

}