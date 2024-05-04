const Register = () => {
    return (
        <div>
            <div >
                <div className="container">
                    <div className="flex flex-col mx-auto bg-white mt-[15%] text-black  md:w-[500px] rounded-xl ">
                        {/* Heading */}
                        <div className="font-bold mx-auto font-serif mt-6 text-3xl underline">
                            <p>Login</p>
                        </div>
                        <div className=" mx-4 ">
                            {/* Form */}
                            <form action="" className="mt-6 flex flex-col gap-4 ">
                                <div className="flex flex-col gap-2">
                                    <input type="email" placeholder="Enter your email." className="border-gray-400 text-xl border-2 py-2 px-1 rounded-md" />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <input type="password" placeholder="Enter your password." className="border-gray-400 text-xl border-2 py-2 px-1 rounded-md" />
                                </div>
                                <a href="" className="text-blue-500 text-center">Forgot password?</a>
                                <button className="bg-blue-500 text-white font-semibold  py-3 w-[90%] mx-auto rounded-xl">Login</button>
                                <p className="font-thin mx-auto">Don't have an account? <span className="text-blue-500 font-serif">Register</span></p>
                            </form>
                            <div className="flex mt-8 justify-around items-center">
                                <p className=" border-b border-gray-400 w-[33%]"></p>
                                <p className="font-thin">OR</p>
                                <p className=" border-b border-gray-400 w-[33%]"></p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button className="bg-blue-500 text-white w-[90%] py-3 mt-4 rounded-xl gap-2 font-semibold flex justify-center items-center">
                                    <FaFacebook />
                                    <p>Login with Facebook</p>
                                </button>
                                <button className="bg-white text-gray border border-gray-400 mt-4 w-[90%] py-3 rounded-xl gap-2 font-semibold flex justify-center items-center mb-6">
                                    <FcGoogle />
                                    <p>Login with Google</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register