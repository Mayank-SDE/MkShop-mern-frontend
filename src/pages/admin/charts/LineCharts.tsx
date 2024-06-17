import { LineChart } from "../../../components/admin/Charts"
import { useLineQuery } from "../../../redux/api/dashboardAPI";
import { getLastMonths } from "../../../utils/date"
import { LineChartSkeleton } from "../../../components/skeletons/LineChartSkeleton";
import { Navigate } from "react-router-dom";

const months: string[] = getLastMonths().last12Months;

const LineCharts = () => {
    const { data, isLoading, isError } = useLineQuery();
    const lineCharts = data?.lineCharts;

    if (isError) {
        return <Navigate to={"/admin/dashboard"} />
    }
    if (isLoading) {
        return <LineChartSkeleton />;
    }

    const products = lineCharts?.products || [];
    const users = lineCharts?.users || [];
    const revenue = lineCharts?.revenue || [];
    const discounts = lineCharts?.discount || [];

    return (
        <div className="flex flex-col w-full justify-center items-center  mt-6 gap-4 sm:gap-20">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={users}
                    label="Users"
                    borderColor="rgb(53,162,255)"
                    bgColor="rgba(53,162,255,0.5)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Active Users</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={products}
                    label="Users"
                    bgColor="hsla(129,80%,40%,0.4)"
                    borderColor="hsl(129,80%,40%)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Total Products (SKU)</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={revenue}
                    label="Users"
                    borderColor="rgb(53,162,255)"
                    bgColor="rgba(53,162,255,0.5)"
                    labels={months}
                />
                <div className="font-bold text-lg underline font-mono">Total Revenue</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <LineChart
                    data={discounts}
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