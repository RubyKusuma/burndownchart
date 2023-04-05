import './App.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function App() {
  const data = {
    // Dataset Label
    labels: ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      // Dataset Actual
      {
        label: 'Actual',
        data: [6, 3, 9, 30, 20, 50, 55],
        backgroundColor: 'orange',
        borderColor: 'orange',
        pointBorderColor: 'orange',
        fill: true,
        tension: 0.4,
      },

      // Dataset Planned
      {
        label: 'Increment',
        data: [55, 45, 40, 30, 20, 10, 0],
        backgroundColor: 'red',
        borderColor: 'red',
        pointBorderColor: 'red',
        fill: true,
        tension: 0.4,
      },

      {
        label: 'Planned',
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0, // Dataset Axis Y
        max: 60, // Dataset Axis x
      },
    },
  };

  const chartBackground = {
    id: 'chartBackground',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { left, right, width, top, bottom, height },
      } = chart;
      ctx.save();

      ctx.strokeStyle = 'blue';
      ctx.lineWidht = 5;
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(right, bottom);
      ctx.stroke();
      ctx.restore();
    },
  };

  return (
    <div className="App">
      <h1>Ini Chart</h1>
      <div
        style={{
          width: '600px',
          height: '300px',
          padding: '20px',
        }}
      >
        <Line data={data} options={options} plugins={[chartBackground]}></Line>
      </div>
    </div>
  );
}

export default App;
