"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import MainCard from '../Components/ui-component/cards/MainCard';

export default function SalesRate() {
  return (
    <MainCard title="Data title">
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
        height={432.5} />
      </MainCard>
  )
}