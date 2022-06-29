import React from 'react';
import './Style.css';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  DatasetController,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph(props){
    const dataArr = props.d.data;
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          display: false,
        }
      },
    };

    const labels = props.labs
    const data = {
      labels,
      datasets: [
        {
            data: dataArr,
            borderColor: '#F39C12',
            backgroundColor: 'yellow'
            
          },
          
        ],
    };
    
      return <Line options={options} data={data} />;


}

