import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/userAPI";



const Register = () => {

    const navigate = useNavigate();
    const [registerUserInformation, setRegisterInformation] = useState<{
        email: string;
        username: string;
        password: string;
        gender: string;
        dob: string;
        image: null | File;
    }>({
        email: "",
        username: "",
        password: "",
        gender: "",
        dob: "",
        image: null,
    });

    const [preview, setPreview] = useState<string>();

    const [register] = useRegisterMutation();


    const registerUserInformationHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            const selectedFile = files[0];
            setPreview(URL.createObjectURL(selectedFile));
            setRegisterInformation((prevState) => ({
                ...prevState,
                image: selectedFile,
            }));
        } else {
            setRegisterInformation((prevRegisterInformation) => ({
                ...prevRegisterInformation,
                [name]: value,
            }));
        }
    };

    const registerUserSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', registerUserInformation.email);
        formData.append('username', registerUserInformation.username);
        formData.append('password', registerUserInformation.password);
        formData.append('gender', registerUserInformation.gender);
        formData.append('dob', registerUserInformation.dob);
        if (registerUserInformation.image) {
            formData.append('image', registerUserInformation.image);
        }

        try {

            const response = await register(formData).unwrap();

            if (response.success) {
                toast.success(response.message);
                navigate("/login");
            } else {
                toast.error(response.message);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div className="h-[1000px] ">
            <div className="container">
                <div className="lg:w-[50%] sm:w-[70%] w-[90%]  bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-3xl shadow-xl  mx-auto mt-16">
                    <div className="text-center pt-10">
                        <p className="text-xl sm:text-3xl lg:text-4xl font-bold">MKShop Registration Form</p>
                        <p className="font-thin text-xs sm:text-sm lg:text-lg pt-2">Please fill the following form with your correct information.</p>
                    </div>
                    <div className="border-b border-gray-400 mt-2"></div>
                    <div className="mt-2 w-[80%]  rounded-xl mx-auto">
                        <form className=" w-full h-full " onSubmit={registerUserSubmitHandler}>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="email" className="text-xs sm:text-lg lg:text-xl">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    autoComplete="on"
                                    onChange={registerUserInformationHandler}
                                    type="email"
                                    required
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email."
                                    className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                                />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="username" className="text-xs sm:text-lg lg:text-xl">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    autoComplete="on"
                                    onChange={registerUserInformationHandler}
                                    type="text"
                                    required
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username."
                                    className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                                />
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="password" className="text-xs sm:text-lg lg:text-xl">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    onChange={registerUserInformationHandler}
                                    autoComplete="current-password"
                                    type="password"
                                    required
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password."
                                    className="text-xs sm:text-lg lg:text-xl bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                                />
                            </div>
                            <div className="flex flex-col items-start m-4  gap-2">
                                <label htmlFor="gender" className="text-xs sm:text-lg lg:text-xl">
                                    Gender <span className="text-red-500">*</span>
                                </label>
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
                                <label htmlFor="image" className="text-xs sm:text-lg lg:text-xl">
                                    Image<span className="text-red-500">*</span>
                                </label>
                                <input
                                    onChange={registerUserInformationHandler}
                                    type="file"
                                    required
                                    name="image"
                                    id="image"
                                    className="w-[80%] text-xs sm:text-lg lg:text-xl"
                                />
                                {preview && <img src={preview} alt="user-image" className="mt-[20px] rounded-full w-[100px]" />}
                            </div>
                            <div className="flex flex-col m-4 items-start gap-2">
                                <label htmlFor="dob" className="text-xs sm:text-lg lg:text-xl">
                                    Date of birth <span className="text-red-500">*</span>
                                </label>
                                <input
                                    onChange={registerUserInformationHandler}
                                    type="date"
                                    required
                                    name="dob"
                                    id="dob"
                                    className="bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-xs sm:text-lg lg:text-xl text-slate-900 "
                                />
                            </div>
                            <div className="flex justify-center lg:my-16 pb-16 text-xl ">
                                <button type="submit" className="dark:bg-slate-900 dark:text-slate-100 text-slate-900 bg-slate-100  rounded-full text-xs sm:text-lg lg:text-xl  px-4 py-2  hover:scale-125 ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
