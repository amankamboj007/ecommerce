import express from 'express'
import products from './data/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connection from './config/db.js'
import productRoutes from './routes/route.products.js'
const app = express()

dotenv.config()

connection();


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hehheeheheeheh")
})

app.use('/api/product', productRoutes)

app.get('/api/product/:id', (req, res) => {
    let product = products.find((i) => i._id === req.params.id)
    res.json(product)
})


app.listen(process.env.PORT, () => {
    console.log("app started")
})