import { BarChart } from "../../../components/admin/Charts"

const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const BarCharts = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center mt-14 gap-8">
            <div className="flex flex-col justify-center items-center w-full h-[400px]  gap-4">
                <div className="font-bold text-lg font-mono">Top Selling Products & Top Customers</div>
                <BarChart
                    data_1={[10, 20, 30, 40, 50, 60]}
                    data_2={[60, 50, 40, 30, 20, 10]}
                    title_1="Products"
                    title_2="Users"
                    bgColor_1={`hsl(260,50%,30%)`}
                    bgColor_2={`hsl(360,90%,90%)`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="font-bold text-lg font-mono">Orders throughout the year</div>
                <BarChart
                    data_1={[10, 20, 30, 40, 50, 60, 10, 20, 30, 40, 50, 60]}
                    data_2={[]}
                    horizontal={true}
                    title_1="Products"
                    title_2=""
                    bgColor_1={`hsl(260,50%,30%)`}
                    bgColor_2=""
                    labels={months}
                />
            </div>
        </div>
    )
}

export default BarCharts