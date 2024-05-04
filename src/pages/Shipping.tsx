
const Shipping = () => {
    return (
        <div>
            <div className="container flex flex-col items-center my-[30px] bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-[1000px]">
                <div>
                    <p className="font-bold lg:text-2xl text-xl">Shipping Address</p>
                </div>
                <div className="bg-slate-900 text-slate-100 rounded-xl mt-12 dark:bg-slate-100 dark:text-slate-900 h-[500px] w-[50%]">
                    <form action="" className="my-[25px] flex flex-col gap-4 text-slate-100 text-lg">
                        <div className="flex flex-col items-start ml-[10px]">
                            <label htmlFor="address">Address</label>
                            <textarea placeholder="Enter your address." id="address" className="rounded-xl w-[60%]" />
                        </div>
                        <div className="flex flex-col items-start ml-[10px]">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" placeholder="Enter your city." className="rounded-xl w-[60%]" />
                        </div>
                        <div className="flex flex-col items-start ml-[10px]">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" placeholder="Enter your state." className="rounded-xl w-[60%]" />
                        </div>
                        <div className="flex flex-col items-start ml-[10px]">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="countru" placeholder="Enter your country." className="rounded-xl w-[60%]" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Shipping