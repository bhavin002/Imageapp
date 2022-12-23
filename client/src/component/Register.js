import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const setData = (e) => {
        const { value } = e.target;
        setTitle(value);
    }
    const setImgFile = (e) => {
        setFile(e.target.files[0]);
    }
    const saveData = async (e) => {
        e.preventDefault();
        if (!title || !file) {
            alert("Both Filed Are Required");
        } else {
            const formData = new FormData();
            formData.append("photo", file);
            formData.append("title", title);
            const config = {
                headers: {
                    'Content-Type': 'multipart-formdata'
                }
            }
            const res = await axios.post('/register', formData, config);
            if (res.status === 201) {
                alert("Your Data Is Submitted SuccessFully");
                navigate("/");
            } else {
                alert("Somthing Went Wrong");
            }
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center mt-3'>Upload Your Image</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-2 mt-5 col-md-8">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name='title' value={title} onChange={setData} placeholder="Enter Title..." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Select Your Image</Form.Label>
                                <Form.Control type="file" name="photo" onChange={setImgFile} placeholder="Choose Image..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={saveData}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;