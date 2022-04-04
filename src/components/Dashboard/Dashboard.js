import React from 'react';
import SalesLineChart from '../SalesLineChart/SalesLineChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='container my-3'>
            <SalesLineChart></SalesLineChart>
        </div>
    );
};

export default Dashboard;