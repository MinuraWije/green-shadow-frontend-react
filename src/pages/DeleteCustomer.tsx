import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Customer } from '../models/Customer';
import { Modal } from '../components/Modal';
import { deleteCustomer } from '../reducers/customerSlice';


export function DeleteCustomer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        const deletedCustomer = new Customer(name, email, phone);
        dispatch(deleteCustomer(deletedCustomer));
        navigate('/');
    }

    return (
        <>
            <header>
                <h2>Delete Customer</h2>
            </header>
            <br />
            <Modal
                handleSubmit={handleSubmit}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
            >
                Delete Customer
            </Modal>
        </>
    );
}