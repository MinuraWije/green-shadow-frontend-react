import React from 'react';
import { useSelector } from 'react-redux';

export function Dashboard() {
    const customers = useSelector((state) => state.customer);

    return (
        <>
            <h2>Dashboard</h2>
            {customers.map((customer) => (
                <div key={customer.email}>
                    {customer.name} {customer.email} {customer.phone}
                </div>
            ))}
        </>
    );
}