import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"



const Login = () => {
    return (
        <div >
            <div className="container">
                <div className="flex flex-col mx-auto bg-slate-900 dark:bg-slate-100  mt-[40px] sm:mt-[70px] text-slate-100 dark:text-slate-900 w-[300px] lg:w-[400px] rounded-xl ">
                    {/* Heading */}
                    <div className="font-bold mx-auto font-serif mt-6 text-xl lg:text-3xl underline">
                        <p>Login</p>
                    </div>
                    <div className=" mx-4 ">
                        {/* Form */}
                        <form action="" className="mt-6 flex flex-col gap-4 ">
                            <div className="flex flex-col gap-2">
                                <input type="email" placeholder="Enter your email." className="border-gray-400 text-sm  lg:text-xl border-2 py-2 px-1 rounded-md" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <input type="password" placeholder="Enter your password." className="border-gray-400 text-sm  lg:text-xl border-2 py-2 px-1 rounded-md" />
                            </div>
                            <a href="" className="text-blue-500 text-center">Forgot password?</a>
                            <button className="bg-blue-500 text-slate-100  font-semibold text-sm  py-3 w-[90%] mx-auto rounded-xl">Login</button>
                            <p className="font-thin mx-auto">Don't have an account? <span className="text-blue-500 font-serif">Register</span></p>
                        </form>
                        <div className="flex mt-8 justify-around items-center">
                            <p className=" border-b border-gray-400 w-[33%]"></p>
                            <p className="font-thin">OR</p>
                            <p className=" border-b border-gray-400 w-[33%]"></p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <button className="bg-blue-500 text-sm  text-slate-100 w-[90%] py-3 mt-4 rounded-xl gap-2 font-semibold flex justify-center items-center">
                                <FaFacebook />
                                <p>Login with Facebook</p>
                            </button>
                            <button className="bg-slate-100 text-gray border border-gray-400 mt-4 w-[90%] py-3 rounded-xl gap-2 font-semibold flex text-sm text-slate-900 dark:text-slate-900 justify-center items-center mb-6">
                                <FcGoogle />
                                <p>Login with Google</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login