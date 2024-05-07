// import { useState } from "react";

import { ChangeEvent, FormEvent, useState } from "react";


const Register = () => {
    // const [file, setFile] = useState("");
    // const handleChange = () => {
    //     setFile(file);
    // }

    const [registerUserInformation, setRegisterInformation] = useState({
        email: "",
        name: "",
        passwordOne: "",
        passwordTwo: "",
        gender: "",
        image: "",
        dob: ""
    });

    const registerUserInformationHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setRegisterInformation(prevRegisterInformation => ({ ...prevRegisterInformation, [event.target.name]: event.target.value }));

    }

    const registerUserSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerUserInformation);

    }

    return (
        <div className="h-[1000px] ">
            <div className="container">
                <div className="lg:w-[50%] sm:w-[70%] w-[90%]  bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-3xl shadow-xl  mx-auto mt-16">
                    <div className="text-center pt-10">
                        <p className="text-xl sm:text-3xl lg:text-4xl font-bold">MKShop Registration Form</p>
                        <p className="font-thin text-xs sm:text-sm lg:text-lg pt-2">Please fill the following form with your correct information.</p>
                    </div>
                    <div className="border-b border-gray-400 mt-2">
                    </div>
                    <div className="mt-2 w-[80%]  rounded-xl mx-auto">
                        <form className=" w-full h-full " onSubmit={registerUserSubmitHandler}>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="email" className="text-xs sm:text-lg lg:text-xl">Email Address <span className="text-red-500">*</span></label>
                                <input autoComplete="on" onChange={registerUserInformationHandler} type="email" required name="email" id="email" placeholder="Enter your email." className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100" />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="name" className="text-xs sm:text-lg lg:text-xl">Name <span className="text-red-500">*</span></label>
                                <input autoComplete="on" onChange={registerUserInformationHandler} type="name" required name="name" id="name" placeholder="Enter your name." className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100" />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="passwordOne" className="text-xs sm:text-lg lg:text-xl">New Password <span className="text-red-500">*</span></label>
                                <input onChange={registerUserInformationHandler} autoComplete="current-password" type="password" required name="passwordOne" id="passwordOne" placeholder="Enter your password." className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100" />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="passwordTwo" className="text-xs sm:text-lg lg:text-xl">Confirm New Password <span className="text-red-500">*</span></label>
                                <input onChange={registerUserInformationHandler} autoComplete="current-password" type="password" required name="passwordTwo" id="passwordTwo" placeholder="Confirm your password." className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100" />
                            </div>
                            <div className="flex flex-col items-start m-4  gap-2">
                                <label htmlFor="gender" className="text-xs sm:text-lg lg:text-xl">Gender <span className="text-red-500">*</span></label>
                                <div className="flex gap-2 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <input onChange={registerUserInformationHandler} type="radio" name="gender" value="male" />
                                        <p className="text-xs sm:text-lg lg:text-xl">Male</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input onChange={registerUserInformationHandler} type="radio" name="gender" value="female" />
                                        <p className="text-xs sm:text-lg lg:text-xl">Female</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input onChange={registerUserInformationHandler} type="radio" name="gender" value="others" />
                                        <p className="text-xs sm:text-lg lg:text-xl">Others</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="image" className="text-xs sm:text-lg lg:text-xl">Image<span className="text-red-500">*</span></label>
                                <input onChange={registerUserInformationHandler} type="file" required name="image" id="image" className="w-[80%] text-xs sm:text-lg lg:text-xl" />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="dob" className="text-xs sm:text-lg lg:text-xl">Date of birth <span className="text-red-500">*</span></label>
                                <input onChange={registerUserInformationHandler} type="date" required name="dob" id="dob" placeholder="Enter your password." className="bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-xs sm:text-lg lg:text-xl text-slate-900 " />
                            </div>
                            <div className="flex justify-center lg:my-16 pb-16 text-xl ">
                                <button type="submit" className="dark:bg-slate-900 dark:text-slate-100 text-slate-900 bg-slate-100  rounded-full text-xs sm:text-lg lg:text-xl  px-4 py-2  hover:scale-125 ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register