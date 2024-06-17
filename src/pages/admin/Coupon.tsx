import { FormEvent, ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import { useCreateCouponMutation, useDeleteCouponMutation, useGetAllCouponQuery } from "../../redux/api/couponAPI";
import { Column } from "react-table";
import { Navigate } from "react-router-dom";
import TableHOC from "../../components/admin/TableHOC";

interface CouponTableInterface {
    coupon: string;
    amount: number;
    action: ReactElement;
}

const columns: Column<CouponTableInterface>[] = [
    { Header: "Coupon", accessor: "coupon" },
    { Header: "Amount", accessor: "amount" },
    { Header: "Action", accessor: "action" }
];

const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
    const { isLoading, data, isError } = useGetAllCouponQuery();
    const [deleteCoupon] = useDeleteCouponMutation();
    const [createCoupon] = useCreateCouponMutation();

    const [rows, setRows] = useState<CouponTableInterface[]>([]);
    const [size, setSize] = useState<number>(8);
    const [prefix, setPrefix] = useState<string>("");
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [coupon, setCoupon] = useState<string>("");

    useEffect(() => {
        if (data) {
            setRows(data.coupons.map((coupon) => ({
                coupon: coupon.coupon,
                amount: coupon.amount,
                action: <button onClick={() => deleteHandler(coupon._id)} className="bg-red-500 px-3 py-1 hover:bg-red-600 rounded-full font-semibold text-slate-100">Delete</button>,
            })));
        }
    }, [data]);

    const deleteHandler = async (couponId: string) => {
        try {
            const response = await deleteCoupon(couponId).unwrap();
            if (response.success) {
                toast.success(response.message);
                setIsCopied(prevState => !prevState);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Coupon deletion failed. Please try again.");
        }
    };

    const couponSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!includeNumbers && !includeCharacters && !includeSymbols) {
            toast.error("Please select at least one option: numbers, characters, or symbols.");
            return;
        }

        let result: string = prefix || "";
        const loopLength: number = size - result.length;

        for (let i = 0; i < loopLength; i++) {
            let entireString: string = "";
            if (includeCharacters) entireString += allCharacters;
            if (includeNumbers) entireString += allNumbers;
            if (includeSymbols) entireString += allSymbols;

            const randomNumber = Math.floor(Math.random() * entireString.length);
            result += entireString[randomNumber];
        }

        setCoupon(result);
        setIsCopied(false);

        try {
            const response = await createCoupon({ coupon: result, amount }).unwrap();
            if (response.success) {
                toast.success(response.message);
                setIsCopied(prevState => !prevState);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Coupon generation failed. Please try again.");
        }
    };

    const copyTextHandler = async (enteredCoupon: string) => {
        await navigator.clipboard.writeText(enteredCoupon);
        setIsCopied(true);
    };

    if (isError) {
        return <Navigate to={"/admin/dashboard"} />;
    }

    const Table = TableHOC<CouponTableInterface>(
        columns,
        rows,
        'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto h-[500px] mt-4',
        "Coupons",
        rows.length > 6
    );

    return (
        <>
            <div className="flex flex-col justify-center mt-6 items-center gap-4 w-full">
                <div className="text-lg font-bold">Coupon Generator</div>
                <div className="sm:w-[50%] border-slate-500 border-2 rounded-2xl h-fit p-4 w-full">
                    <form onSubmit={couponSubmitHandler} className="flex justify-center flex-col gap-4 items-center">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                <label htmlFor="textToInclude" className="text-sm font-semibold">Text to include:</label>
                                <input
                                    className="text-xs border dark:text-slate-900 border-slate-500 p-2 rounded-xl"
                                    type="text"
                                    id="textToInclude"
                                    placeholder="Text to include"
                                    value={prefix}
                                    onChange={(e) => setPrefix(e.target.value)}
                                    maxLength={size}
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                <label htmlFor="couponLength" className="text-sm font-semibold">Coupon length:</label>
                                <input
                                    className="border dark:text-slate-900 text-xs border-slate-500 p-2 rounded-xl"
                                    type="number"
                                    id="couponLength"
                                    value={size}
                                    placeholder="Enter coupon length"
                                    onChange={(e) => setSize(Number(e.target.value))}
                                    min={8}
                                    max={25}
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                <label htmlFor="include" className="text-sm font-semibold">Include:</label>
                                <div className="text-xs flex gap-1">
                                    <label>
                                        <input type="checkbox" onChange={() => setIncludeCharacters(prev => !prev)} checked={includeCharacters} /> Characters
                                    </label>
                                    <label>
                                        <input type="checkbox" onChange={() => setIncludeNumbers(prev => !prev)} checked={includeNumbers} /> Numbers
                                    </label>
                                    <label>
                                        <input type="checkbox" onChange={() => setIncludeSymbols(prev => !prev)} checked={includeSymbols} /> Symbols
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center justify-center">
                            <label htmlFor="couponAmount" className="text-sm font-semibold">Amount:</label>
                            <input
                                className="border dark:text-slate-900 text-xs border-slate-500 p-2 rounded-xl"
                                type="number"
                                id="couponAmount"
                                value={amount}
                                placeholder="Enter coupon worth"
                                onChange={(e) => setAmount(Number(e.target.value))}
                                min={1}
                                max={100000}
                            />
                        </div>
                        <button className="bg-blue-500 px-3 py-1 w-fit mt-3 rounded-full text-sm text-slate-100 hover:scale-110" type="submit">
                            Generate
                        </button>
                        {coupon && (
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <div className="font-mono text-sm text-slate-500">{coupon}</div>
                                <button
                                    type="button"
                                    className="bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-slate-100 px-3 w-fit text-sm font-mono rounded-3xl"
                                    onClick={() => copyTextHandler(coupon)}
                                >
                                    {isCopied ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            {isLoading ? <TableSkeleton /> : <Table />}
        </>
    );
};

export default Coupon;
