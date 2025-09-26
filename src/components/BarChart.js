import "../styles/BarChart.css";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ problemsSolved }) {
    const ratings = Object.keys(problemsSolved).map(Number);
    const yesData = ratings.map(rating => problemsSolved[rating].Yes);
    const noData = ratings.map(rating => problemsSolved[rating].No);

    const data = {
        labels: ratings,
        datasets: [
            {
                label: 'Yes',
                data: yesData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'No',
                data: noData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Problems Solved',
                font: { size: 18 },
            },
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Rating',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Problems Solved',
                },
                beginAtZero: true,
                stacked: true,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="bar-chart-container">
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;