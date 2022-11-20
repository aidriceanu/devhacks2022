import React from 'react';
import {ResponsiveContainer, Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";

export type MoodchartProps = {}

const data = [
    {
        name: 'Dai 1',
        uv: 4,
        generalMood: 2,
        amt: 2,
    },
    {
        name: 'Dai 2',
        uv: 3,
        generalMood: 1,
        amt: 2,
    },
    {
        name: 'Day 3',
        uv: 2,
        generalMood: 5,
        amt: 2,
    },
    {
        name: 'Day 4',
        uv: 2,
        generalMood: 3,
        amt: 2,
    },
    {
        name: 'Day 5',
        uv: 1,
        generalMood: 4,
        amt: 2,
    },
    {
        name: 'Day 5',
        uv: 2,
        generalMood: 3,
        amt: 2,
    },
    {
        name: 'Day 6',
        uv: 3,
        generalMood: 4,
        amt: 2,
    },
    {
        name: 'Day 7',
        uv: 4,
        generalMood: 3,
        amt: 2,
    },
];

export default function MoodChart() {
    return (
        <ResponsiveContainer width="100%" height="30%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="generalMood" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
