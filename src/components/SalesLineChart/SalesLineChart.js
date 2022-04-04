import React from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const SalesLineChart = () => {
    const chart = useChart();
    return (
        <div>
            <h3 className="text-secondary chart-title">Monthly Sales</h3>
            <LineChart width={500} height={400} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="sales" stroke="#A125E2" activeDot={{ r: 8 }} ></Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default SalesLineChart;
