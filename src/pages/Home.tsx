
import { useSelector } from "react-redux";
import CategoriesSection from "../components/CategoriesSection"
import Hero from "../components/Hero"
import { UserReducerInitialState } from "../types/reducer-types";

const Home = () => {
    const { user } = useSelector((state: { userReducer: UserReducerInitialState }) => {
        return state.userReducer;
    });
    console.log(user);
    return (
        <>
            <Hero />
            <CategoriesSection />
        </>
    )
}

export default Home