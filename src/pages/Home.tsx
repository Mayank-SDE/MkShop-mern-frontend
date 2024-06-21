
import { useDispatch } from "react-redux";
import CategoriesSection from "../components/CategoriesSection"
import Hero from "../components/Hero"
import { useEffect } from "react";
import { userExists } from "../redux/reducer/userReducer";
import toast from "react-hot-toast";
import { MessageResponse } from "../types/api-types";
import Loader from "../components/Loader";
import { useLoggedInQuery } from "../redux/api/userAPI";
import { useLocation } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { data: response, error, isLoading } = useLoggedInQuery();

    useEffect(() => {
        if (response) {
            if (response.success) {
                // Dispatch action to update Redux store with user data
                dispatch(userExists(response.user));
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
    }, [dispatch, location, response, error]);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            <Hero />
            <CategoriesSection />
        </>
    )
}

export default Home