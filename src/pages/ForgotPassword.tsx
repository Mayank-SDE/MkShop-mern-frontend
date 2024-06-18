import { FormEvent, useState } from "react";
import { useForgotPasswordMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userExists } from "../redux/reducer/userReducer";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const navigate = useNavigate();
    const [forgotPassword] = useForgotPasswordMutation();
    const forgotPasswordSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log();
        try {
            const response = await forgotPassword({
                email,
                username,
                gender,
                dob,
                password
            }).unwrap();
            if (response.success) {
                toast.success(response.message);
                navigate("/login");
                return;
            } else {
                toast.error(response.message);

            }
        } catch (error) {
            console.error(error);
            toast.error("Incorrect details. Please try again.");
        }
    }

    return (
        <div className="container flex justify-center">
            <form
                className="border p-8 border-slate-500 mt-14 sm:w-2/5 w-4/5 rounded-2xl flex flex-col gap-6"
                onSubmit={forgotPasswordSubmitHandler}
            >
                <div className="flex flex-col gap-2">
                    <label className="text-sm sm:text-lg font-medium" htmlFor="email">Email:</label>
                    <input
                        className="rounded-xl p-2 text-slate-500 text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        type="email"
                        id="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm sm:text-lg font-medium" htmlFor="username">Username:</label>
                    <input
                        className="rounded-xl p-2 text-slate-500 text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        type="text"
                        id="username"
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm sm:text-lg font-medium" htmlFor="password">New Password:</label>
                    <input
                        className="rounded-xl p-2 text-slate-500 text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        type="password"
                        id="password"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter new password"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm sm:text-lg font-medium" htmlFor="gender">Gender:</label>
                    <select
                        className="rounded-xl p-2 text-slate-500 text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm sm:text-lg font-medium" htmlFor="dob">Date of Birth:</label>
                    <input
                        className="rounded-xl p-2 text-slate-500 text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                        type="date"
                        id="dob"
                        onChange={(event) => setDob(event.target.value)}
                    />
                </div>
                <button
                    className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-sm font-bold text-white transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ForgotPassword;
