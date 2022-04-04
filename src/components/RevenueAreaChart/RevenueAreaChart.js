import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const RevenueAreaChart = () => {
    const chart = useChart();
    console.log(chart);
    return (
        <div>
            <h2 className="text-secondary chart-title">Investment Vs Revenue</h2>
            <AreaChart width={500} height={400} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default RevenueAreaChart;
