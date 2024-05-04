// import { useState } from "react";


const Register = () => {
    // const [file, setFile] = useState("");
    // const handleChange = () => {
    //     setFile(file);
    // }
    return (

        <div className="container">
            <div className="w-[90%] bg-white rounded-3xl shadow-2xl text-black mx-auto mt-16">
                <div className="text-center pt-10">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">MKShop Registration Form</p>
                    <p className="font-thin text-xs sm:text-sm lg:text-lg pt-2">Please fill the following form with your correct information.</p>
                </div>
                <div className="border-b border-gray-400 mt-5">
                </div>
                <div className="mt-5 w-[80%] border border-black rounded-2xl mx-auto">
                    <form action="" className=" w-full h-full ">
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="email" className="text-xs sm:text-lg lg:text-2xl">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" required name="email" id="email" placeholder="Enter your email." className="text-xs sm:text-lg lg:text-2xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%]" />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="name" className="text-xs sm:text-lg lg:text-2xl">Name <span className="text-red-500">*</span></label>
                            <input type="name" required name="name" id="name" placeholder="Enter your name." className="text-xs sm:text-lg lg:text-2xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%]" />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="password" className="text-xs sm:text-lg lg:text-2xl">New Password <span className="text-red-500">*</span></label>
                            <input type="password" required name="password" id="password" placeholder="Enter your password." className="text-xs sm:text-lg lg:text-2xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%]" />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="password" className="text-xs sm:text-lg lg:text-2xl">Confirm New Password <span className="text-red-500">*</span></label>
                            <input type="password" required name="password" id="password" placeholder="Confirm your password." className="text-xs sm:text-lg lg:text-2xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%]" />
                        </div>
                        <div className="flex flex-col items-start m-4  gap-2">
                            <label htmlFor="gender" className="text-xs sm:text-lg lg:text-2xl">Gender <span className="text-red-500">*</span></label>
                            <div className="flex gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="gender" value="male" />
                                    <p className="text-xs sm:text-lg lg:text-2xl">Male</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="gender" value="female" />
                                    <p className="text-xs sm:text-lg lg:text-2xl">Female</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="gender" value="others" />
                                    <p className="text-xs sm:text-lg lg:text-2xl">Others</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="image" className="text-xs sm:text-lg lg:text-2xl">Image<span className="text-red-500">*</span></label>
                            <input type="file" required name="image" id="image" className="w-[80%] text-xs sm:text-lg lg:text-2xl" />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="dob" className="text-xs sm:text-lg lg:text-2xl">Date of birth <span className="text-red-500">*</span></label>
                            <input type="date" required name="dob" id="dob" placeholder="Enter your password." className="bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-xs sm:text-lg lg:text-2xl" />
                        </div>
                        <div className="flex justify-center mb:4 lg:my-16 text-2xl ">
                            <button type="submit" className="bg-black rounded-full text-xs sm:text-lg lg:text-2xl text-white px-8 py-2 hover:scale-125 ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register