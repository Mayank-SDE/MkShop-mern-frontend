import { useSelector } from "react-redux"
import { UserReducerInitialState, UserStateInterface } from "../types/reducer-types"
import { ChangeEvent, FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDeleteUserMutation, useUpdateMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userDoesNotExists, userExists } from "../redux/reducer/userReducer";
import { formatDate } from "../utils/date";
import { RootState, persistor } from "../redux/store";

const Profile = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);

    const [profileInformation, setProfileInformation] = useState<UserStateInterface>({
        _id: user?._id as string,
        username: user?.username as string,
        image: user?.image as string,
        email: user?.email as string,
        password: user?.password as string,
        gender: user?.gender as string,
        dob: user?.dob as string,
        role: user?.role as string,
        createdAt: user?.createdAt as string,
        updatedAt: user?.updatedAt as string
    });
    const [preview, setPreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [update] = useUpdateMutation();
    const [deleteUser] = useDeleteUserMutation();

    const profileInformationHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === 'image' && event.target instanceof HTMLInputElement && event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            setPreview(URL.createObjectURL(selectedFile));
            setImageFile(selectedFile);
        } else {
            setProfileInformation((prevProfileInforamtionState) => {
                return { ...prevProfileInforamtionState, [name]: value }
            })
        }
    }

    const profileInformationSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("_id", profileInformation._id);
        formData.append("username", profileInformation.username);
        formData.append("email", profileInformation.email);
        formData.append("password", profileInformation.password);
        formData.append("gender", profileInformation.gender);
        formData.append("dob", profileInformation.dob);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        try {
            const response = await update(formData).unwrap();

            if (response.success) {
                toast.success(response.message);
                dispatch(userExists(response.user));
                navigate("/profile");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHandler = async () => {
        try {
            const response = await deleteUser(profileInformation._id).unwrap();
            if (response.success) {
                toast.success(response.message);
                dispatch(userDoesNotExists());
                await persistor.purge(); // Clear persisted state on deleting the user.
                navigate("/");
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const imageURL = profileInformation.image as string;
    if (!profileInformation) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center w-full">
                <div className="font-bold text-lg mb-8">Profile Details</div>
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg max-w-full p-8">
                    <form onSubmit={profileInformationSubmitHandler} className="w-full max-w-md mx-auto">
                        <div className="flex flex-col items-center gap-5">
                            {preview ? (
                                <img src={preview} alt={profileInformation.username} className="w-24 h-24 rounded-full object-cover" />
                            ) : (
                                <img src={imageURL.startsWith("a") ? `https://mkshop-mern-backend.onrender.com/${imageURL}` : imageURL} alt={profileInformation.username} className="w-24 h-24 rounded-full object-cover" />
                            )}
                            <input type="file" name="image" onChange={profileInformationHandler} className="text-sm border-slate-500 border" />
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username" className="font-serif">Name</label>
                                <input onChange={profileInformationHandler} className="rounded-xl border-slate-500 border text-gray-900 px-3 py-1" type="text" id="username" name="username" value={profileInformation.username} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-serif">Email</label>
                                <input onChange={profileInformationHandler} className="rounded-xl border-slate-500 border text-gray-900 px-3 py-1" type="email" name="email" id="email" value={profileInformation.email} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="font-serif">Password</label>
                                <input onChange={profileInformationHandler} className="rounded-xl border-slate-500 border text-gray-900 px-3 py-1" type="password" name="password" id="password" value={profileInformation.password || ''} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="gender" className="font-serif">Gender</label>
                                <select onChange={profileInformationHandler} className="rounded-xl border-slate-500 border text-gray-900 px-3 py-1" name="gender" value={profileInformation.gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="dob" className="font-serif">Date of Birth</label>
                                <input onChange={profileInformationHandler} name="dob" className="rounded-xl border-slate-500 border text-gray-900 px-3 py-1" type="date" id="dob" value={formatDate(profileInformation.dob)} />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-around gap-3 mt-4">
                                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-5 py-1 rounded-full transition-transform transform hover:scale-110">Update</button>
                                <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-5 py-1 rounded-full transition-transform transform hover:scale-110" onClick={deleteHandler}>Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
