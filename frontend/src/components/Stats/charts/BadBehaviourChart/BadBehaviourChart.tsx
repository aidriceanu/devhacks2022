import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'No eye contact.', value: 250 },
    { name: 'Skipped a meal.', value: 100 },
    { name: 'Had a tantrum.', value: 500 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
// @ts-ignore
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}% ${data[index]['name']}`}
        </text>
    );
};

export type GoodbehaviourchartProps = {}

export default function BadBehaviourChart({}: GoodbehaviourchartProps) {
    return (
        <ResponsiveContainer width="100%" height="30%">
            <PieChart width={800} height={800}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    width={800}
                    height={800}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
