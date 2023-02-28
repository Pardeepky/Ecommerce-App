import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../../context/cart-context';

const ProductsList = (props) => {
    const cartCtx = useContext(CartContext);

    const handleSubmit = ({ item }) => {
        cartCtx.addToCart({ ...item, quantity: 1 })
    }

    return (
        <>
            <div className='d-flex justify-content-center col-md-6'>
                <Card style={{ width: '18rem', margin: '1rem', border: 'none' }}>
                    <Card.Title style={{ textAlign: 'center' }}>{props.item.title}</Card.Title>
                    <Card.Img variant="top" src={props.item.imageUrl} />
                    <Card.Body>
                        <Card.Text>
                            ${props.item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleSubmit(props)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ProductsList