import { ReactElement } from "react"
import { Navigate } from "react-router-dom";

interface Props {
    children?: ReactElement;
    isAuthenticated: boolean;
    adminRoute?: boolean;
    isAdmin?: boolean;
    redirect?: string;
}

const ProtectedRoute = ({
    isAuthenticated,
    adminRoute,
    isAdmin,
    redirect,
    children
}: Props) => {

    if (!isAuthenticated) {
        return <Navigate to={redirect as string} />
    }
    return ({ children });

}

export default ProtectedRoute