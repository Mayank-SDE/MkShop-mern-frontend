import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoggedInQuery } from "../redux/api/userAPI";
import { userExists } from "../redux/reducer/userReducer";
import { MessageResponse } from "../types/api-types";
import Loader from "../components/Loader";
import { server } from "../utils/config";

const LoginSuccess = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { data: response, error, isLoading } = useLoggedInQuery();

    useEffect(() => {
        if (response) {
            if (response.success) {
                dispatch(userExists(response.user));
                toast.success(`${response.message}, Please update your profile.`);
            } else {
                toast.error(response.message);
            }
        } else if (error) {
            if ('data' in error) {
                toast.error((error.data as MessageResponse).message);
            }
            console.log(error);
        }
    }, [dispatch, location, response, error]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Navigate to={`${server}`} />
    );
};

export default LoginSuccess;
