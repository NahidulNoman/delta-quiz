import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const statistic = useLoaderData();
    const statistics = statistic.data;
    return (
        <div className='container d-flex justify-content-center mt-5'>
            {/* <ResponsiveContainer width={700} height="80%"> */}
            <AreaChart width={500}
          height={400}
          data={statistics}>
         <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Statistics;