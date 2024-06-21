
import { useDispatch } from "react-redux";
import CategoriesSection from "../components/CategoriesSection"
import Hero from "../components/Hero"
import { useEffect } from "react";
import { userExists } from "../redux/reducer/userReducer";
import toast from "react-hot-toast";
import { MessageResponse } from "../types/api-types";
import { useLoggedInQuery } from "../redux/api/userAPI";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";




const Home = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.userReducer);

    useEffect(() => {
        const { data: response, error } = useLoggedInQuery();
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
    }, [dispatch, user]);


    return (
        <>
            <Hero />
            <CategoriesSection />
        </>
    )
}

export default Home