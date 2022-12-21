import React from 'react'
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className='text-center'>MERN Image Upload Project</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-between align-items-center mt-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='mt-3' src="./com.jpg" />
                        <Card.Body>
                            <Card.Title>Computer</Card.Title>
                            <Card.Text>Date : 12/03/2002</Card.Text>
                            <Button className='btn btn-danger'>Delete</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='mt-3' src="./com.jpg" />
                        <Card.Body>
                            <Card.Title>Computer</Card.Title>
                            <Card.Text>Date : 12/03/2002</Card.Text>
                            <Button className='btn btn-danger'>Delete</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className='mt-3' src="./com.jpg" />
                        <Card.Body>
                            <Card.Title>Computer</Card.Title>
                            <Card.Text>Date : 12/03/2002</Card.Text>
                            <Button className='btn btn-danger'>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Home;