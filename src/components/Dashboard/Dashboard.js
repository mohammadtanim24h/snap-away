import React from 'react';
import RevenueAreaChart from '../RevenueAreaChart/RevenueAreaChart';
import SalesLineChart from '../SalesLineChart/SalesLineChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='container my-3 chart-container'>
            <SalesLineChart></SalesLineChart>
            <RevenueAreaChart></RevenueAreaChart>
        </div>
    );
};

export default Dashboard;