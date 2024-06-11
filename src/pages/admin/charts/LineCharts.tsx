import { LineChart } from "../../../components/admin/Charts"

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

const LineCharts = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center  mt-6 gap-4 sm:gap-20">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={[1, 2, 1, 3, 1, 2, 3, 1, 2, 3, 4, 1]}
                    label="Users"
                    borderColor="rgb(53,162,255)"
                    bgColor="rgba(53,162,255,0.5)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Active Users</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={[1, 2, 1, 3, 1, 2, 3, 1, 2, 3, 4, 1]}
                    label="Users"
                    bgColor="hsla(129,80%,40%,0.4)"
                    borderColor="hsl(129,80%,40%)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Total Products (SKU)</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={[1, 2, 1, 3, 1, 2, 3, 1, 2, 3, 4, 1]}
                    label="Users"
                    borderColor="rgb(53,162,255)"
                    bgColor="rgba(53,162,255,0.5)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Total Revenue</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={[1, 2, 1, 3, 1, 2, 3, 1, 2, 3, 4, 1]}
                    label="Users"
                    borderColor="rgb(53,162,255)"
                    bgColor="rgba(53,162,255,0.5)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Discount Alloted</div>
            </div>

        </div>
    )
}

export default LineCharts