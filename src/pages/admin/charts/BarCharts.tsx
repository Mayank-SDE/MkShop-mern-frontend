
import { BarChart } from "../../../components/admin/Charts"
import { useBarQuery } from "../../../redux/api/dashboardAPI";

import BarChartSkeleton from "../../../components/skeletons/BarChartSkeleton";
import { getLastMonths } from "../../../utils/date";
import { Navigate } from "react-router-dom";




const BarCharts = () => {


    const { data, isLoading, isError } = useBarQuery();
    const barCharts = data?.barCharts;

    if (isError) {
        return <Navigate to={"/admin/dashboard"} />
    }
    if (isLoading) {
        return <BarChartSkeleton />;
    }

    const products = barCharts?.products || [];
    const users = barCharts?.users || [];
    const orders = barCharts?.orders || [];
    return (
        <div className="flex flex-col w-[80%] justify-center items-center m-14 gap-8">
            <div className="flex flex-col justify-center items-center w-full h-[400px]  gap-4">
                <div className="font-bold text-lg font-mono">Top Selling Products & Top Customers</div>
                <BarChart
                    data_1={products}
                    data_2={users}
                    labels={getLastMonths().last6Months}
                    title_1="Products"
                    title_2="Users"
                    bgColor_1={`hsl(260,50%,30%)`}
                    bgColor_2={`hsl(360,90%,90%)`}
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <div className="font-bold text-lg font-mono">Orders throughout the year</div>
                <BarChart
                    data_1={orders}
                    data_2={[]}
                    horizontal={true}
                    title_1="Products"
                    labels={getLastMonths().last12Months}
                    title_2=""
                    bgColor_1={`hsl(260,50%,30%)`}
                    bgColor_2=""

                />
            </div>
        </div>
    )
}

export default BarCharts