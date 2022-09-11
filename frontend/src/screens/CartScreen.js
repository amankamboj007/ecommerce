import React, { useEffect } from 'react'
import { Col, ListGroup, Row, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cartAction'


const CartScreen = ({ match, location, history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const productId = match.params.id
  const { cartItems } = cart


  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
    //eslint-disable-next-line
  }, [dispatch])

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <>
            <Link className='btn btn-dark mx-0 my-4' to="/">GO BACK</Link>

            <h4>Your Cart is empty</h4>
          </>
        ) : (
          <ListGroup variant='fluid'>
            {
              cartItems.map(items => (
                <ListGroup.Item key={items.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={items.image} fluid></Image>
                    </Col>
                    <Col>
                      <Link to={`/product/${items.product}`}>{items.name}</Link>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        )

        }
      </Col>

      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  )
}

export default CartScreen