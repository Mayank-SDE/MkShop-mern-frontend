import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartData,
    ChartOptions,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface BarChartProps {
    horizontal?: boolean;
    data_1: number[];
    data_2: number[];
    title_1: string;
    title_2: string;
    bgColor_1: string;
    bgColor_2: string;
    labels?: string[];
}

export const BarChart = ({
    horizontal = false,
    data_1 = [],
    data_2 = [],
    title_1,
    title_2,
    bgColor_1,
    bgColor_2,
    labels = months,
}: BarChartProps) => {

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,  // Ensure the chart is responsive
        indexAxis: horizontal ? 'y' : 'x',
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94a3b8' // Coloring the y-axis labels to text-slate-500
                },
                border: {
                    color: '#94a3b8' // Coloring the y-axis line to text-slate-500
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94a3b8' // Coloring the x-axis labels to text-slate-500
                },
                border: {
                    color: '#94a3b8' // Coloring the x-axis line to text-slate-500
                }
            }
        }
    };

    const data: ChartData<'bar', number[], string> = {
        labels,
        datasets: [
            {
                label: title_1,
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: 'flex',
                barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: 'flex',
                barPercentage: 1,
                categoryPercentage: 0.4
            },
        ],
    };

    return <div style={{ width: '100%', height: '100%' }}><Bar options={options} data={data} width={horizontal ? '300%' : ' '} /></div>;
}


interface DoughnutChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    cutout?: number | string;
    legends?: boolean;
    offset?: number[];
}

export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout = '50%', // Setting a default cutout value
    legends = true,
    offset,
}: DoughnutChartProps) => {

    const doughnutData: ChartData<'doughnut', number[], string> = {
        labels,
        datasets: [{
            data,
            backgroundColor,
            borderWidth: 0,
            offset,
        }]
    }

    const doughnutOptions: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,  // Ensure the chart is responsive
        plugins: {
            legend: {
                display: legends,
                position: 'bottom',
                labels: {
                    padding: 40
                }
            }
        },
        cutout,
    }

    return (
        <Doughnut data={doughnutData} options={doughnutOptions} />
    );
}


interface PieChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    offset?: number[];
}

export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset,
}: PieChartProps) => {

    const pieChartData: ChartData<'pie', number[], string> = {
        labels,
        datasets: [{
            data,
            backgroundColor,
            borderWidth: 1,
            offset,
        }]
    }

    const pieChartOptions: ChartOptions<'pie'> = {
        responsive: true,
        maintainAspectRatio: false,  // Ensure the chart is responsive
        plugins: {
            legend: {
                display: false,

            }
        },
    }

    return (<div style={{ width: '100%', height: '100%' }}>
        <Pie data={pieChartData} options={pieChartOptions} />
    </div>
    );
}


interface LineChartProps {
    data: number[];
    bgColor: string;
    borderColor: string;
    label: string;
    labels?: string[];
}

export const LineChart = ({
    data,
    bgColor,
    borderColor,
    label,
    labels = months,
}: LineChartProps) => {

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,  // Ensure the chart is responsive
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94a3b8' // Coloring the y-axis labels to text-slate-500
                },
                border: {
                    color: '#94a3b8' // Coloring the y-axis line to text-slate-500
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94a3b8' // Coloring the x-axis labels to text-slate-500
                },
                border: {
                    color: '#94a3b8' // Coloring the x-axis line to text-slate-500
                }
            }
        }
    };

    const lineChartData: ChartData<'line', number[], string> = {
        labels,
        datasets: [
            {
                fill: true,
                label,
                data,
                backgroundColor: bgColor,
                borderColor
            },

        ],
    };

    return <div style={{ width: '100%', height: '100%' }}><Line options={options} data={lineChartData} /></div>;
}
