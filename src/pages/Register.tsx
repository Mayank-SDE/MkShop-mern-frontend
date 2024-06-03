import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/userAPI";
import { RegisterUserInformation } from "../types/types";



const Register = () => {
    const navigate = useNavigate();
    const [registerUserInformation, setRegisterInformation] = useState<RegisterUserInformation>({
        email: "",
        username: "",
        password: "",
        gender: "",
        dob: "",
        image: null,
    });

    const [preview, setPreview] = useState<string | null>(null);
    const [register] = useRegisterMutation();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            const selectedFile = files[0];
            setPreview(URL.createObjectURL(selectedFile));
            setRegisterInformation((prevState) => ({
                ...prevState,
                image: selectedFile,
            }));
        } else {
            setRegisterInformation((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        Object.entries(registerUserInformation).forEach(([key, value]) => {
            formData.append(key, value as string | Blob);
        });

        try {
            const response = await register(formData).unwrap();

            if (response.success) {
                toast.success(response.message);
                navigate("/login");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="lg:w-[35%] sm:w-[70%] w-[90%] bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-3xl shadow-xl mx-auto mt-8">
                <div className="text-center pt-10">
                    <p className="text-xl font-bold">MKShop Registration Form</p>
                    <p className="font-thin text-xs pt-2">Please fill the following form with your correct information.</p>
                </div>
                <div className="border-b border-gray-400 mt-2"></div>
                <div className="mt-2 w-[80%] rounded-xl mx-auto">
                    <form className="w-full h-full" onSubmit={handleFormSubmit}>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="email" className="text-xs">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                autoComplete="on"
                                onChange={handleInputChange}
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="Enter your email."
                                className="text-xs bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="username" className="text-xs">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                autoComplete="on"
                                onChange={handleInputChange}
                                type="text"
                                required
                                name="username"
                                id="username"
                                placeholder="Enter your username."
                                className="text-xs bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="password" className="text-xs">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={handleInputChange}
                                autoComplete="current-password"
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder="Enter your password."
                                className="text-xs bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col items-start m-4 gap-2">
                            <label htmlFor="gender" className="text-xs">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-2 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <input
                                        className="accent-slate-900 dark:accent-slate-100"
                                        onChange={handleInputChange}
                                        type="radio"
                                        name="gender"
                                        value="male"
                                    />
                                    <p className="text-xs">Male</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        className="accent-slate-900 dark:accent-slate-100"
                                        onChange={handleInputChange}
                                        type="radio"
                                        name="gender"
                                        value="female"
                                    />
                                    <p className="text-xs">Female</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        className="accent-slate-900 dark:accent-slate-100"
                                        onChange={handleInputChange}
                                        type="radio"
                                        name="gender"
                                        value="others"
                                    />
                                    <p className="text-xs">Others</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="image" className="text-xs">
                                Image <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="file"
                                required
                                name="image"
                                id="image"
                                className="w-[80%] text-xs accent-slate-900 dark:accent-slate-100"
                            />
                            {preview && <img src={preview} alt="user preview" className="mt-[20px] rounded-full w-[100px]" />}
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="dob" className="text-xs">
                                Date of birth <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="date"
                                required
                                name="dob"
                                id="dob"
                                className="bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-xs text-slate-900"
                            />
                        </div>
                        <div className="flex justify-center my-8 pb-4 text-xl">
                            <button type="submit" className="dark:bg-slate-900 dark:text-slate-100 text-slate-900 bg-slate-100 rounded-full text-xs px-4 py-2 hover:scale-105 transition-transform">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

/*
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

        <div className="container">
            <div className="lg:w-[35%] sm:w-[70%] w-[90%]  bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-3xl shadow-xl  mx-auto mt-8">
                <div className="text-center pt-10">
                    <p className="text-xl  font-bold">MKShop Registration Form</p>
                    <p className="font-thin text-xs  pt-2">Please fill the following form with your correct information.</p>
                </div>
                <div className="border-b border-gray-400 mt-2"></div>
                <div className="mt-2 w-[80%]  rounded-xl mx-auto">
                    <form className=" w-full h-full " onSubmit={registerUserSubmitHandler}>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="email" className="text-xs ">
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
                                className="text-xs  bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="username" className="text-xs ">
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
                                className="text-xs  bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="password" className="text-xs ">
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
                                className="text-xs bg-gray-200 rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                            />
                        </div>
                        <div className="flex flex-col items-start m-4  gap-2 ">
                            <label htmlFor="gender" className="text-xs ">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-2 flex-wrap">
                                <div className="flex items-center  gap-2">
                                    <input className="accent-slate-900 dark:accent-slate-100" onChange={registerUserInformationHandler} type="radio" name="gender" value="male" />
                                    <p className="text-xs ">Male</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input onChange={registerUserInformationHandler} type="radio" name="gender" value="female" />
                                    <p className="text-xs ">Female</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input onChange={registerUserInformationHandler} type="radio" name="gender" value="others" />
                                    <p className="text-xs ">Others</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="image" className="text-xs ">
                                Image<span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={registerUserInformationHandler}
                                type="file"
                                required
                                name="image"
                                id="image"
                                className="w-[80%] text-xs "
                            />
                            {preview && <img src={preview} alt="user-image" className="mt-[20px] rounded-full w-[100px]" />}
                        </div>
                        <div className="flex flex-col m-4 items-start gap-2">
                            <label htmlFor="dob" className="text-xs ">
                                Date of birth <span className="text-red-500">*</span>
                            </label>
                            <input
                                onChange={registerUserInformationHandler}
                                type="date"
                                required
                                name="dob"
                                id="dob"
                                className="bg-gray-200  rounded-lg px-2 py-1 border border-gray-500 w-[80%] text-xs  text-slate-900 "
                            />
                        </div>
                        <div className="flex justify-center my-8 pb-4 text-xl ">
                            <button type="submit" className="dark:bg-slate-900 dark:text-slate-100 text-slate-900 bg-slate-100  rounded-full text-xs  px-4 py-2  hover:scale-125 ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;
*/