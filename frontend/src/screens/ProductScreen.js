import React, { useEffect, useState } from 'react'
import { Col, Row, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useSelector, useDispatch } from 'react-redux'
import { detailProduct } from '../actions/productAction'


const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    const cartHandler = () => {
        console.log(qty)
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const productDetail = useSelector(state => state.productDetail)
    const { error, product, loading } = productDetail
    useEffect(() => {
        dispatch(detailProduct(match.params.id))
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <Link className='btn btn-light my-3' to="/">GO BACK</Link>
            {loading ?
                <h2>Loading...</h2> :
                error ?
                    <h3>{error.message}</h3> :
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3><strong>{product.name}</strong></h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h4>Price:${product.price}</h4>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description:{product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price:
                                            </Col>
                                            <Col>
                                                <strong>
                                                    ${product.price}
                                                </strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Status:
                                            </Col>
                                            <Col>
                                                {product.countInStocks > 0 ? "Instock" : "Out of stock"}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {product.countInStocks > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Qty:
                                                </Col>
                                                <Col>
                                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                        {
                                                            [...Array(product.countInStocks).keys()].map(x => (
                                                                <option key={x + 1} value={x + 1} >
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}
                                    <ListGroup.Item>
                                        <Button className='btn-block' onClick={cartHandler} type='Button' disabled={product.countInStocks === 0}>Add To Cart </Button>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>

                    </Row>
            }
        </>
    )
}

export default ProductScreen