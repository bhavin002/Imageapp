import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import axios from 'axios';
const Home = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getAllData();
    }, [])
    console.log(images)
    const config = {
        'Content-Type': 'application/json'
    }
    const getAllData = async () => {
        const Data = await axios.get('/users', config);
        if (Data.status === 201) {
            setImages(Data.data.AlluserData);
        } else {
            alert("Somthing Went Wrong");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className='text-center'>MERN Image Upload Project</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-between align-items-center mt-5">
                    {
                        images.length > 0 ? images.map((el, i) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" className='mt-3' src={`/uploads/${el.imgpath}`} />
                                        <Card.Body >
                                            <Card.Title>{el.title}</Card.Title>
                                            <Card.Text>{moment(el.date).format("YYYY-MM-DD")}</Card.Text>
                                            <Button className='btn btn-danger'>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        }) : ""
                    }


                </div>
            </div>
        </>
    )
}

export default Home;