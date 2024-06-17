import { BiMaleFemale } from "react-icons/bi";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import WidgetItem from "../../components/admin/WidgetItem";
import DashboardTable from "../../components/admin/DashboardTable";
import { useStatsQuery } from "../../redux/api/dashboardAPI";
import { DashboardSkeleton } from "../../components/skeletons/DashboardSkeleton";
import { getLastMonths } from "../../utils/date";
import { Navigate } from "react-router-dom";
import { Stats } from "../../types/api-types";

type CategoryItemProps = {
    color: string;
    value: number;
    title: string;
}

const CategoryItem = ({ color, value, title }: CategoryItemProps) => {
    return (
        <div className="w-full flex min-w-[400px]:flex-row flex-col justify-between gap-2 items-center text-sm font-thin p-4">
            <div>{title}</div>
            <div className="bg-gray-300 w-full rounded-2xl h-2 relative overflow-hidden">
                <div
                    className={`absolute top-0 left-0 z-10 h-full bg-${color}-500 rounded-2xl`}
                    style={{ width: `${value}%` }}
                ></div>
            </div>
            <div>{value}%</div>
        </div>
    );
}

const Dashboard = () => {
    const { data, isLoading, isError } = useStatsQuery();
    if (isError) {
        return <Navigate to={"/"} />
    }
    const stats = data?.stats as Stats;


    if (isLoading) {
        return <DashboardSkeleton />;
    }

    const WidgetItems = [{
        percent: stats?.changePercent.revenue,
        amount: true,
        value: stats?.counts!.revenue || 0,
        color: "blue",
        title: "Revenue"
    }, {
        percent: stats?.changePercent.user,
        amount: false,
        value: stats?.counts!.user || 0,
        color: "blue",
        title: "Users"
    }, {
        percent: stats?.changePercent.order,
        amount: false,
        value: stats?.counts!.order || 0,
        color: "blue",
        title: "Transactions"
    }, {
        percent: stats?.changePercent.product,
        amount: false,
        value: stats?.counts!.product || 0,
        color: "blue",
        title: "Products"
    }];
    console.log(stats);
    return (
        <div className="container flex flex-col justify-center items-center overflow-y-auto mt-8">
            <div className="flex flex-wrap justify-around gap-2 items-center">
                {WidgetItems.map((widgetItem) => (
                    <WidgetItem
                        key={widgetItem.title}
                        percent={widgetItem.percent}
                        amount={widgetItem.amount}
                        value={widgetItem.value}
                        color={widgetItem.color}
                        title={widgetItem.title}
                    />
                ))}
            </div>
            <div className="flex flex-wrap w-full mt-3">
                <div className="min-w-full bg-slate-900 dark:bg-slate-100 flex flex-col rounded-2xl shadow-2xl justify-start items-center h-fit p-8 text-slate-100 dark:text-slate-900">
                    <span className="text-lg underline">REVENUE & TRANSACTIONS</span>
                    <div className="w-full h-[400px]">
                        <BarChart
                            data_1={stats?.chart.revenue}
                            data_2={stats?.chart.order}
                            title_2="Transactions"
                            title_1="Revenue"
                            bgColor_1="rgb(0,115,255)"
                            bgColor_2="rgba(53,162,235,0.8)"
                            labels={getLastMonths().last6Months}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-around items-center w-full mt-10">
                <div className="flex flex-col h-[400px] lg:w-1/3 w-full rounded-2xl relative bg-slate-900 text-slate-100 dark:bg-slate-100 p-10 dark:text-slate-900 items-center">
                    <div className="font-semibold text-lg underline">Gender Ratio</div>
                    <div className="w-full h-full flex items-center justify-center">
                        <DoughnutChart
                            labels={["Male", "Female"]}
                            data={[stats?.userRatio.male, stats?.userRatio.female]}
                            backgroundColor={["blue", "pink"]}
                            cutout="70%" // Adjusted cutout value
                        />
                    </div>
                    <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                        <BiMaleFemale />
                    </div>
                </div>
                <div className="lg:w-1/3 w-full bg-slate-100 h-[353px] dark:bg-slate-900 flex flex-col justify-start items-center relative pt-8">
                    <span className="sticky top-4 underline">INVENTORY</span>
                    <div className="mt-3 w-full overflow-y-auto">
                        {stats?.categoryCount!.map((item) => {
                            const [title, value] = Object.entries(item)[0];
                            return <CategoryItem key={title} color="green" value={value} title={title} />
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full px-4 overflow-y-auto">
                <DashboardTable
                    data={stats?.latestTransaction.map((transaction) => {
                        return {
                            id: transaction._id,
                            quantity: transaction?.orderItems?.length || 0,
                            amount: transaction.total,
                            discount: transaction.discount,
                            status: transaction.status
                        }
                    })}
                />
            </div>
        </div>
    );
}

export default Dashboard;
