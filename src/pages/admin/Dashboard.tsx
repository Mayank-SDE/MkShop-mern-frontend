import { BiMaleFemale } from "react-icons/bi";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import WidgetItem from "../../components/admin/WidgetItem";
import DashboardTable from "../../components/admin/DashboardTable";

const WidgetItems = [{
    percent: 40,
    amount: true,
    value: 345,
    color: "blue",
    title: "Revenue"
}, {
    percent: 40,
    amount: true,
    value: 345,
    color: "blue",
    title: "Users"
}, {
    percent: 40,
    amount: true,
    value: 345,
    color: "blue",
    title: "Transactions"
}, {
    percent: 40,
    amount: true,
    value: 345,
    color: "blue",
    title: "Orders"
}];

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
                <div className=" min-w-full  bg-slate-900 dark:bg-slate-100 flex flex-col rounded-2xl shadow-2xl justify-start items-center h-fit p-8 text-slate-100 dark:text-slate-900">
                    <span className="text-lg underline">REVENUE & TRANSACTIONS</span>
                    <div className="w-full h-[400px]  ">
                        <BarChart
                            data_1={[100, 200, 300, 400, 500, 600, 700]}
                            data_2={[10, 20, 30, 40, 50, 60, 70]}
                            title_2="Transactions"
                            title_1="Revenue"
                            bgColor_1="rgb(0,115,255)"
                            bgColor_2="rgba(53,162,235,0.8)"
                        />
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap  justify-around items-center w-full mt-10">
                <div className="flex flex-col h-[400px]  lg:w-1/3 w-full rounded-2xl relative bg-slate-900 text-slate-100 dark:bg-slate-100 p-10 dark:text-slate-900 items-center">
                    <div className="font-semibold text-lg underline">Gender Ratio</div>
                    <div className="w-full h-full flex items-center justify-center">
                        <DoughnutChart
                            labels={["Male", "Female"]}
                            data={[10, 12]}
                            backgroundColor={["blue", "pink"]}
                            cutout="70%" // Adjusted cutout value
                        />
                    </div>
                    <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                        <BiMaleFemale />
                    </div>
                </div>
                <div className="lg:w-1/3 w-full  bg-slate-100 h-[353px] dark:bg-slate-900 flex flex-col justify-start items-center relative pt-8">
                    <span className="sticky top-4 underline">INVENTORY</span>
                    <div className="mt-3 w-full overflow-y-auto">
                        {[
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },
                            { title: "Laptops", value: 90, color: "green" }, { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },
                            { title: "Laptops", value: 90, color: "green" }, { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },
                            { title: "Laptops", value: 90, color: "green" }, { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },
                            { title: "Laptops", value: 90, color: "green" }, { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 50, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },
                            { title: "Laptops", value: 90, color: "green" },

                        ].map((item, index) => (
                            <CategoryItem key={index} {...item} />
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-full px-4 overflow-y-auto">
                <DashboardTable
                    data={[
                        {
                            id: "1",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "2",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "3",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "4",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "5",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "6",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        },
                        {
                            id: "7",
                            status: "delivered",
                            quantity: 50,
                            amount: 5000,
                            discount: 50
                        }
                    ]}
                />
            </div>
        </div>
    );
}

export default Dashboard;
