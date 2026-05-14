import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { TeaTastingRecord } from '../types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface FlavorRadarChartProps {
  record: TeaTastingRecord;
}

const FlavorRadarChart: React.FC<FlavorRadarChartProps> = ({ record }) => {
  const data = {
    labels: ['香气', '口感', '甜度', '苦度', '顺滑度', '耐泡度'],
    datasets: [
      {
        label: record.teaName,
        data: [
          record.aroma,
          record.taste,
          record.sweetness,
          record.bitterness,
          record.smoothness,
          Math.min(record.brewCount * 2, 10),
        ],
        backgroundColor: 'rgba(34, 139, 34, 0.2)',
        borderColor: 'rgba(34, 139, 34, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 139, 34, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34, 139, 34, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default FlavorRadarChart;
