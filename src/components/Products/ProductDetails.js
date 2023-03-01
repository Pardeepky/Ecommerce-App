import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsArr, reviews } from '../../assets/data';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import CartContext from '../../context/cart-context';

const ProductDetails = () => {
  const [product, setProduct] = useState('')
  const { id } = useParams();
  const cartCtx = useContext(CartContext);

  const handleSubmit = (item) => {
    cartCtx.addToCart({ ...item, quantity: 1 })
}

  const fetchProductDetails = () => {
    const productDetail = productsArr.find((item) => item.id === +id);
    setProduct(productDetail)
  }

  useEffect(() => {
    fetchProductDetails()
  }, [])

  return (
    <>
      <section className='container'>
      <div className="col d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Button variant="primary" onClick={()=> handleSubmit(product)}>
            Add to cart
          </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price: {product.price} USD</small>
          </Card.Footer>
        </Card>
        </div>
      </section>
      <section className='container'>
        <h1 className='text-center'>Reviews</h1>
        <ListGroup>
          {reviews.map((review) => (
            <Card key={review.id}>
              <Card.Header>{review.author}</Card.Header>
              <Card.Body>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
              <ListGroupItem>
                Rating: {review.rating} out of 5
              </ListGroupItem>
            </Card>
          ))}
        </ListGroup>
      </section>
    </>
  )
}

export default ProductDetails