import mongoose from "mongoose";

const connection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(con.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connection