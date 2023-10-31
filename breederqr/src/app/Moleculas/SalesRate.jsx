"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SalesRate() {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['2020', '2021', '2022'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 14, 21],
        },
      ]}
      width={1000}
      height={600}
    />
  );
}