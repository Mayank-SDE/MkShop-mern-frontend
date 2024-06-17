import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

type WidgetItemProps = {
    title: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
};

const WidgetItem = ({ title, value, percent, color, amount = false }: WidgetItemProps) => {


    const angle = (Math.abs(percent) / 100) * 360;

    const conicGradientStyle = {
        background: `conic-gradient(${color} 0deg ${angle}deg, gray ${angle}deg 360deg)`
    };


    return (
        <div className="border border-slate-900 dark:border-slate-100 text-xs  flex justify-between items-center shadow-2xl rounded-xl w-[250px] p-8">
            <div className="flex flex-col justify-center gap-1 items-start overflow-x-scroll mx-2">
                <div className="font-thin text-sm">{title}</div>
                <div className="font-bold font-mono">{amount ? `$${value}` : value}</div>
                <div>
                    {percent > 0 ? (
                        <div className="text-green-500 font-mono">
                            <HiTrendingUp />+{percent > 10000 ? 9999 : percent}%
                        </div>
                    ) : (
                        <div className="text-red-500 font-mono">
                            <HiTrendingDown />
                            {percent < -10000 ? -9999 : percent}%
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center">
                {/* Gradient container */}
                <div className="relative w-20 h-20 rounded-full" style={conicGradientStyle}>
                    {/* Inner white circle */}
                    <div className="absolute inset-0 dark:bg-slate-900 bg-slate-100 rounded-full m-2 flex items-center justify-center">
                        <div>
                            {percent > 0 ? (
                                <div className="text-green-500 font-mono">
                                    <HiTrendingUp />+{percent > 10000 ? 9999 : percent}%
                                </div>
                            ) : (
                                <div className="text-red-500 font-mono">
                                    <HiTrendingDown />
                                    {percent < -10000 ? -9999 : percent}%
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WidgetItem;
