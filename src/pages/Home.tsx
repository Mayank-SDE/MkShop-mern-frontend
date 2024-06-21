import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CategoriesSection from "../components/CategoriesSection";
import Hero from "../components/Hero";
import { userExists } from "../redux/reducer/userReducer";
import toast from "react-hot-toast";
import { MessageResponse } from "../types/api-types";
import { useLoggedInQuery } from "../redux/api/userAPI";
import { RootState } from "../redux/store";
import { UserStateInterface } from "../types/reducer-types";


const Home = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.userReducer);

    const { data: response, error } = useLoggedInQuery(user === null ? { flag: true } : { flag: false });

    useEffect(() => {
        if (response) {
            if (response.success) {
                // Dispatch action to update Redux store with user data
                dispatch(userExists(response.user as UserStateInterface));
                toast.success(`${response.message}. Please update your profile.`);
            } else {
                toast.error(response.message);
            }
        } else if (error) {
            // Handle API errors
            if ('data' in error) {
                toast.error((error.data as MessageResponse).message);
            } else {
                // Log error for debugging
                console.error("API Error:", error);
            }
        }
    }, [response, error, dispatch]);

    return (
        <>
            <Hero />
            <CategoriesSection />
        </>
    );
}

export default Home;
