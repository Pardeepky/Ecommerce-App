import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/cart-context';

const ProductsList = (props) => {
    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const handleSubmit = ({ item }) => {
        const userName = localStorage.getItem('userName')
        cartCtx.addToCart({ ...item, quantity: 1 }, userName)
    }

    const handleImageClick = (id) => {
        navigate(`/store/${id}`)
    }

    return (
        <>
            <div className='d-flex justify-content-center col-md-6'>
                <Card style={{ width: '18rem', margin: '1rem', border: 'none' }}>
                    <Card.Title style={{ textAlign: 'center' }}>{props.item.title}</Card.Title>
                    <Card.Img variant="top" src={props.item.imageUrl} onClick={() => handleImageClick(props.item.id)} style={{ cursor: 'pointer' }}/>
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