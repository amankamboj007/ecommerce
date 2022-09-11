import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productAction'

const Homescreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    
    const { loading, error, product } = productList
    useEffect(() => {
        dispatch(listProduct())
        //eslint-disable-next-line
    }, [dispatch])


    return (
        <>
            <h1>
                Latest products range
            </h1>
            {loading ?
                <h2>Loading...</h2> :
                error ?
                    <h3>{error.message}</h3> :
                    <Row>
                        {product.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>}

        </>
    )
}

export default Homescreen