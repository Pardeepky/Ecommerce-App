import axios from 'axios';
import React, { useRef } from 'react';

const ContactUs = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const contactPersonDetails = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                number: numberRef.current.value,
            };
            const res = await axios.post('https://react-http-cc9eb-default-rtdb.firebaseio.com/contactDetails.json', {
                body: JSON.stringify(contactPersonDetails),
                header: {
                    'Contetnt-Type': 'application/json'
                }
            })
            nameRef.current.value = '';
            emailRef.current.value = '';
            numberRef.current.value = '';
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='card ' style={{ width: '40rem' }}>
                <div className='card-body'>
                    <form onSubmit={submitHandler}>
                        <div className="form-outline mb-4">
                            <label htmlFor='name' className="form-label">Name</label>
                            <input type="text" className="form-control" id='name' ref={nameRef} />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" ref={emailRef} />
                        </div>
                        <div className="form-outline mb-4">
                            <label htmlFor="number" className="form-label">Number</label>
                            <input type="text" className="form-control" id="number" ref={numberRef} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;