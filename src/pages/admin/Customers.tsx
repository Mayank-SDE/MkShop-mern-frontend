import { ReactElement, useEffect, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { useAllUsersQuery, useDeleteUserMutation } from "../../redux/api/userAPI";
import { CustomError } from "../../types/api-types";
import toast from "react-hot-toast";
import TableSkeleton from "../../components/skeletons/TableSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userDoesNotExists } from "../../redux/reducer/userReducer";



interface CustomerTableInterface {
    avatar: ReactElement;
    name: string;
    gender: string;
    email: string;
    role: string;
    action: ReactElement;
}
const columns: Column<CustomerTableInterface>[] = [{
    Header: "Avatar",
    accessor: "avatar"
}, {
    Header: "Name",
    accessor: "name"
}, {
    Header: "Gender",
    accessor: "gender"
}, {
    Header: "Email",
    accessor: "email"
}, {
    Header: "Role",
    accessor: "role"
}, {
    Header: "Action",
    accessor: "action"
}];
const Customers = () => {

    const { user: adminUser } = useSelector((state: RootState) => state.userReducer);
    const { data, isError, error, isLoading } = useAllUsersQuery();

    const [deleteUser] = useDeleteUserMutation();
    const dispatch = useDispatch();
    if (isError) {
        const err = error as CustomError;
        toast.error(err.data.message);
    }
    const [rows, setRows] = useState<CustomerTableInterface[]>([]);




    useEffect(() => {

        if (data && data.users) {
            setRows(data.users.map((user) => {
                const imageAddress: string = user.image as string;

                return {
                    avatar: <img className="w-24 h-24 object-cover rounded-full" src={imageAddress.startsWith("a") ? `http://localhost:3000/${imageAddress}` : imageAddress} alt={user.username} />,
                    name: `${user.username.toUpperCase()} ${user._id === adminUser?._id ? '(You)' : ''}`,
                    gender: user.gender.toUpperCase(),
                    email: user.email.toUpperCase(),
                    role: user.role.toUpperCase(),
                    action: <button onClick={() => deleteHandler(user._id)} className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold cursor-pointer text-slate-100" >Delete</button>,

                };
            }));
        }
    }, [data]);

    const deleteHandler = async (userId: string) => {
        try {
            const response = await deleteUser(userId).unwrap();

            if (response.success) {
                toast.success(response.message);
                if (userId === adminUser?._id) {
                    toast.success("You have deleted yourself.");
                    dispatch(userDoesNotExists());
                }
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Registration failed. Please try again.");
        }
    }


    const Table = TableHOC<CustomerTableInterface>(columns, rows, 'bg-slate-100  text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto  h-[500px]  mt-4', "Customers", rows.length > 6);

    return <>{isLoading ? <TableSkeleton /> : <Table />}</>;

}

export default Customers