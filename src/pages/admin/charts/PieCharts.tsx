
import { DoughnutChart, PieChart } from "../../../components/admin/Charts";
import { usePieQuery } from "../../../redux/api/dashboardAPI";

import { PieChartSkeleton } from "../../../components/skeletons/PieChartSkeleton";
import { Navigate } from "react-router-dom";
import { PieChartResponse } from "../../../types/api-types";

const colors = [
    '#007BFF',
    '#FFA500',
    '#6F42C1',
    '#28A745',
    '#20C997',
    '#FF0000',
    '#FFD700',
    '#800080',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#C0C0C0',
    '#808080',
    '#FF4500',
    '#800000',
    '#2E8B57',
    '#4B0082',
    '#8A2BE2',
    '#4682B4',
];

const PieCharts = () => {

    const { data, isLoading, isError } = usePieQuery();
    const pieCharts = data?.pieCharts as PieChartResponse;
    if (isError) {
        return <Navigate to={"/admin/dashboard"} />
    }
    if (isLoading) {
        return <PieChartSkeleton />;
    }



    const orderFullfillmentRatio = [
        pieCharts.orderFullfillmentRatio.placed,
        pieCharts.orderFullfillmentRatio.picked,
        pieCharts.orderFullfillmentRatio.packed,
        pieCharts.orderFullfillmentRatio.shipped,
        pieCharts.orderFullfillmentRatio.delivered,

    ];


    const revenueDistribution = [
        pieCharts.revenueDistribution.marketingCost,
        pieCharts.revenueDistribution.discount,
        pieCharts.revenueDistribution.burnt,
        pieCharts.revenueDistribution.productionCost,
        pieCharts.revenueDistribution.netMargin
    ];

    const userAgeGroup = [
        pieCharts.usersAgeGroup.teen,
        pieCharts.usersAgeGroup.adult,
        pieCharts.usersAgeGroup.old,

    ]

    // data = { orderFullfillmentRatio  };
    return (

        <div className="flex flex-col w-full justify-center items-center  mt-6 gap-4 sm:gap-20">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <PieChart labels={["Placed", "Picked", "Packed", "Shipped", "Delivered"]} data={orderFullfillmentRatio} backgroundColor={[
                    '#007BFF',
                    '#FFA500',
                    '#6F42C1',
                    '#28A745',
                    '#20C997'
                ]} offset={[0, 50]} />
                <div className="font-bold text-lg underline font-mono">Order Fullfillment ratio</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-14 gap-4">
                <DoughnutChart labels={pieCharts.productCategories.map(category => Object.keys(category)[0])} data={pieCharts.productCategories.map(category => Object.values(category)[0])} legends={false} backgroundColor={colors} offset={[0, 50]} />

                <div className="font-bold text-lg underline font-mono">Products-Categories ratio</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-8 gap-4">
                <DoughnutChart labels={["In Stock", "Out of Stock"]} data={[pieCharts.stockAvailability.inStock, pieCharts.stockAvailability.outOfStock]} legends={false} backgroundColor={['green',
                    'blue']} offset={[0, 50]} cutout={"70%"} />
                <div className="font-bold text-lg underline font-mono">Stock Availability</div>

            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-8 gap-4">
                <DoughnutChart labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]} data={revenueDistribution} legends={false} backgroundColor={['#FFA500',
                    '#6F42C1',
                    '#28A745',
                    '#20C997']} offset={[20, 30, 20, 30, 80]} />
                <div className="font-bold text-lg underline font-mono">Revenue Distribution</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <PieChart labels={["Teenage (Below 20)", "Adults (20 - 40)", "Older (Above 40)"]} data={userAgeGroup} backgroundColor={[
                    '#007BFF',
                    '#FFA500',
                    '#6F42C1',

                ]} offset={[0, 0, 50]} />
                <div className="font-bold text-lg underline font-mono">User Age Group</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-14 gap-4">
                <DoughnutChart labels={["Admin", "Customers"]} data={[pieCharts.adminCustomer.admin, pieCharts.adminCustomer.customer]} legends={false} backgroundColor={['#FFA500',
                    '#6F42C1',]} offset={[0, 50]} />

                <div className="font-bold text-lg underline font-mono">User-Admin ratio</div>
            </div>

        </div>
    )
}



export default PieCharts;