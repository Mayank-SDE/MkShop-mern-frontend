import { useSelector } from "react-redux"
import { UserReducerInitialState, UserStateInterface } from "../types/reducer-types"
import { ChangeEvent, FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDeleteUserMutation, useUpdateMutation } from "../redux/api/userAPI";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userDoesNotExists, userExists } from "../redux/reducer/userReducer";
import { formatDate } from "../utils/date";
import { persistor } from "../redux/store";




const Profile = () => {

    const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => state.userReducer);


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
        formData.append("_id", profileInformation._id)
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
        <div className="container h-fit pb-[50px] sm:pb-[200px] lg:pb-[150px]">

            <div className=" flex flex-col justify-center items-center w-full ">
                <div>
                    <div className="font-bold my-8 text-lg">Profile Details</div>
                </div>
                <div className="rounded-xl dark:bg-slate-100 max-w-full  dark:text-slate-900 bg-slate-900 text-slate-100">
                    <form onSubmit={profileInformationSubmitHandler} className="m-10 max-w-full sm:w-[400px] ">
                        <div className="flex flex-col gap-5">
                            {preview && <img src={preview} alt={profileInformation.username} className="w-[100px] rounded-full mx-auto" />}
                            {!preview && <img src={imageURL.startsWith("a") ? `http://localhost:3000/${imageURL}` : imageURL} alt={profileInformation.username} className="w-[100px] rounded-full mx-auto" />}
                            <input type="file" name="image" onChange={profileInformationHandler} />
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="username">Name</label>
                                <input onChange={profileInformationHandler} className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="text" id="username" name="username" value={profileInformation.username!} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="email">Email</label>
                                <input onChange={profileInformationHandler} className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="email" name="email" id="email" value={profileInformation.email} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="">Password</label>
                                <input onChange={profileInformationHandler} className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="password" name="password" id="password" value={profileInformation.password || ''} />
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <div>Gender</div>
                                <select onChange={profileInformationHandler} className="rounded-xl text-slate-900 px-3 py-1 font-thin" name="gender" value={profileInformation.gender}>
                                    <option value="male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 font-serif">
                                <label htmlFor="dob">Date of birth</label>
                                <input onChange={profileInformationHandler} name="dob" className="rounded-xl text-slate-900 px-3 py-1 font-thin" type="date" id="dob" value={formatDate(profileInformation.dob)} />
                            </div>
                            <div className="flex flex-col sm:flex-row  sm:justify-around gap-3">
                                <button type="submit" className="bg-green-500 w-fit mx-auto hover:bg-green-600 px-5 mt-3 py-1 hover:scale-110 rounded-full">Update</button>
                                <button type="button" className="bg-red-500 w-fit mx-auto hover:bg-red-600 px-5 mt-3 py-1 hover:scale-110 rounded-full" onClick={deleteHandler}>Delete</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile