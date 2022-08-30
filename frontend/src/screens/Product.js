import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <>

            <Card className='my-3 py-3'>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={`${product.image}`} />
                </Link>
                <Card.Body>
                    < Link to={`/product/${product._id}`}>
                        <Card.Title as='div'>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                        </div>
                    </Card.Text>
                    <Card.Text as='div'>
                        <h3>${product.price}</h3>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Product