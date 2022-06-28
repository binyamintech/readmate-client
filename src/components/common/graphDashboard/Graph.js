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
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      },
    };
    
    const labels = props.labs; // get the data as props - props.xAxis
    const data = {
      labels,
      datasets: [
        {
            label: "",
            data: props.d.data,
            borderColor: 'blue',
            backgroundColor: 'yellow'
          },
          
        ],
    };
    
      return <Line options={options} data={data} />;


}

