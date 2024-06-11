import { DoughnutChart, PieChart } from "../../../components/admin/Charts";
const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
];
const categoriesValues: number[] = [
    1,
    12,
    3,
    14,
    15,
    16,
    17,
    18,
    19,
    11,
    21,
    31,
    41,
    51,
    61,
    17,
    18,
    19,
    91,
    10,
];
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



    return (
        <div className="flex flex-col w-full justify-center items-center  mt-6 gap-4 sm:gap-20">
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <PieChart labels={["Placed", "Picked", "Packed", "Shipped", "Delivered"]} data={[1, 2, 3, 4, 5]} backgroundColor={[
                    '#007BFF',
                    '#FFA500',
                    '#6F42C1',
                    '#28A745',
                    '#20C997'
                ]} offset={[0, 50]} />
                <div className="font-bold text-lg underline font-mono">Order Fullfillment ratio</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-14 gap-4">
                <DoughnutChart labels={categories} data={categoriesValues} legends={false} backgroundColor={colors} offset={[0, 50]} />

                <div className="font-bold text-lg underline font-mono">Products-Categories ratio</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-8 gap-4">
                <DoughnutChart labels={["In Stock", "Out of Stock"]} data={[40, 20]} legends={false} backgroundColor={['green',
                    'grey']} offset={[0, 50]} cutout={"70%"} />
                <div className="font-bold text-lg underline font-mono">Stock Availability</div>

            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-8 gap-4">
                <DoughnutChart labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]} data={[40, 20, 10, 100]} legends={false} backgroundColor={['#FFA500',
                    '#6F42C1',
                    '#28A745',
                    '#20C997']} offset={[20, 30, 20, 30, 80]} />
                <div className="font-bold text-lg underline font-mono">Revenue Distribution</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] gap-4">
                <PieChart labels={["Teenage (Below 20)", "Adults (20 - 40)", "Older (Above 40)"]} data={[1, 2, 3]} backgroundColor={[
                    '#007BFF',
                    '#FFA500',
                    '#6F42C1',

                ]} offset={[0, 0, 50]} />
                <div className="font-bold text-lg underline font-mono">User Age Group</div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[400px] mt-14 gap-4">
                <DoughnutChart labels={["Admin", "Customers"]} data={[40, 250]} legends={false} backgroundColor={['#FFA500',
                    '#6F42C1',]} offset={[0, 50]} />

                <div className="font-bold text-lg underline font-mono">User-Admin ratio</div>
            </div>

        </div>
    )
}



export default PieCharts;