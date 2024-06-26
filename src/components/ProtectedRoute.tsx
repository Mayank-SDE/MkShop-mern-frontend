import { ReactElement } from "react"
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    children?: ReactElement;
    isAuthenticated: boolean;
    adminOnly?: boolean;
    admin?: boolean;
    redirect?: string;
}

const ProtectedRoute = ({
    isAuthenticated,
    adminOnly,
    admin,
    redirect = "/",
    children
}: Props) => {

    if (!isAuthenticated) {
        return <Navigate to={redirect} />
    }
    if (!admin && adminOnly) {
        return <Navigate to={redirect} />
    }
    return children ?? <Outlet />;

}

export default ProtectedRoute