import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';



const ShowData = (props) =>  {
    const data = [
        {
          name: '2014', Production: props.one
        },
        {
          name: '2015', Production: props.two
        },
        {
          name: '2016', Production: props.three
        },
        {
          name: '2017', Production: props.four
        },
        {
          name: '2018', Production: props.five
        }
      ];
    return (
      <AreaChart
        className='chart'
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Production" stroke="#F15839" fill="#282c34" />
      </AreaChart>
    );
}

export default ShowData