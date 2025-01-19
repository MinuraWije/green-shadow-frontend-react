import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { updateCustomer } from '../reducers/customerSlice';
import { Modal } from '../components/Modal';

export function UpdateCustomer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        const updatedCustomer = { name, email, phone };
        dispatch(updateCustomer(updatedCustomer));
        navigate('/');
    }

    return (
        <>
            <header>
                <h2>Update Customer</h2>
            </header>
            <br />
            <Modal
                handleSubmit={handleSubmit}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
            >
                Update Customer
            </Modal>
        </>
    );
}