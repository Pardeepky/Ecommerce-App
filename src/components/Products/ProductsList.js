import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductsList = ({ item }) => {
    return (
        <>
            <div className='d-flex justify-content-center col-md-6'>
                <Card style={{ width: '18rem', margin: '1rem', border: 'none' }}>
                    <Card.Title style={{textAlign:'center'}}>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                        <Card.Text>
                            ${item.price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ProductsList