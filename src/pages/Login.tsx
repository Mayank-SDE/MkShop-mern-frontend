import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userExists } from "../redux/reducer/userReducer";
import { useLoginMutation } from "../redux/api/userAPI";
import { UserLoginBodyInterface } from "../types/types";
import { server } from "../redux/store";

const Login = () => {
    const [loginInformation, setLoginInformation] = useState<UserLoginBodyInterface>({
        username: "",
        password: "",
    });
    const [login] = useLoginMutation();

    const dispatch = useDispatch();

    const loginInformationHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginInformation((prevLoginInformation) => ({
            ...prevLoginInformation,
            [event.target.name]: event.target.value,
        }));
    };

    const loginInformationSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {

            const response = await login(loginInformation).unwrap();
            if (response.success) {
                dispatch(userExists(response.user));
                toast.success(response.message);
            } else {
                toast.error("Not able to login. Please try again after some time.");
            }
        } catch (error: any) {
            toast.error(error.data.message);
        }
    };


    const googleLoginHandler = () => {
        try {
            console.log(`Hitting ${server}/auth/google`);
            window.open(`${server}/auth/google`, "_self");

        } catch (error) {
            toast.error("Sign in failed with google. Try again later.")
        }
    };

    const gitHubLoginHandler = () => {
        try {

            window.open(`${server}/auth/github`, "_self");

        } catch (error) {
            toast.error("Sign in failed with github. Try again later.")

        }
    };

    return (
        <div className="container h-fit">
            <div className="flex flex-col mx-auto text-xs bg-slate-900 dark:bg-slate-100 mt-[10px] sm:mt-[20px] text-slate-100 dark:text-slate-900 w-[300px] lg:w-[400px] rounded-xl">
                {/* Heading */}
                <div className="font-bold mx-auto font-serif mt-6 text-xl underline">
                    <p>Login</p>
                </div>
                <div className="mx-4">
                    {/* Form */}
                    <form className="mt-6 flex flex-col gap-4" onSubmit={loginInformationSubmitHandler}>
                        <div className="flex flex-col gap-2">
                            <input
                                name="username"
                                required
                                onChange={loginInformationHandler}
                                type="text"
                                placeholder="Enter your username."
                                className="border-gray-400 border-2 py-2 px-1 text-slate-900 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <input
                                name="password"
                                required
                                onChange={loginInformationHandler}
                                type="password"
                                placeholder="Enter your password."
                                className="border-gray-400 border-2 text-slate-900 py-2 px-1 rounded-md"
                            />
                        </div>
                        <Link to={"/forgot-password"} className="text-blue-500 text-center">
                            Forgot password?
                        </Link>
                        <button className="bg-blue-500 text-slate-100 font-semibold py-3 w-[90%] mx-auto rounded-xl" type="submit">
                            Login
                        </button>
                        <Link to="/register" className="font-thin mx-auto">
                            Don't have an account? <span className="text-blue-500 font-serif">Register</span>
                        </Link>
                    </form>
                    <div className="flex mt-8 justify-around items-center">
                        <p className="border-b border-gray-400 w-[33%]"></p>
                        <p className="font-thin">OR</p>
                        <p className="border-b border-gray-400 w-[33%]"></p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            className="bg-slate-100 text-gray border border-gray-400 mt-4 w-[90%] py-3 rounded-xl gap-2 font-semibold flex text-slate-900 dark:text-slate-900 justify-center items-center"
                            onClick={gitHubLoginHandler}
                        >
                            <FaGithub />
                            <p>Login with Github</p>
                        </button>
                        <button
                            className="bg-slate-100 text-gray border border-gray-400 mt-4 w-[90%] py-3 rounded-xl gap-2 font-semibold flex text-slate-900 dark:text-slate-900 justify-center items-center mb-6"
                            onClick={googleLoginHandler}
                        >
                            <FcGoogle />
                            <p>Login with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
