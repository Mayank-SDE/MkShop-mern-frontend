import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { Product } from "../types/types";
import toast from "react-hot-toast";
import HeroSkeleton from "./skeletons/HeroSkeleton";
import { server } from "../utils/config";
import { Link } from "react-router-dom";



const Hero = () => {
    const { data, isLoading, isError } = useLatestProductsQuery();

    if (isError) {
        return toast.error("Cannot fetch the banner products.");
    }

    const HeroSectionBanner = (data?.products || []) as Product[];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <>
            {isLoading ? (
                <HeroSkeleton />
            ) : (
                <div className="container min-h-[550px] sm:min-h-[650px] flex justify-center items-center duration-200 relative overflow-hidden dark:border-slate-100 border-b-2 border-slate-900 dark:text-slate-100 dark:bg-slate-900 bg-slate-100 text-slate-900">
                    {/* background pattern */}
                    <div className="h-[700px] w-[700px] bg-slate-900 dark:bg-slate-300 absolute -top-[70%] right-0 rounded-xl rotate-45 "></div>
                    {/* Hero Section */}
                    <div className="container pb-8 sm:pb-0">
                        {HeroSectionBanner.length > 0 ? (
                            <Slider {...settings}>
                                {HeroSectionBanner.map((product) => (
                                    <div key={product._id} className="px-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-50">
                                            <div className="flex flex-col gap-4 justify-center pt-12 mt-20 sm:mt-[1rem] sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 bg-slate-100 dark:bg-slate-900 rounded-xl">
                                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                                    {product.title}
                                                </h1>
                                                <p className="text-sm sm:text-lg font-thin">
                                                    {product.description}
                                                </p>
                                                <div>
                                                    <Link to={"/search?keyword="} className="bg-slate-900 text-slate-100 dark:text-slate-900 dark:bg-slate-100 hover:scale-110 duration-200 py-2 px-4 rounded-full">
                                                        Explore more...
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="order-1 sm:order-2">
                                                <div className="relative z-10 mt-2">
                                                    <img
                                                        src={product.thumbnail.startsWith("a") ? `${server}/${product.thumbnail}` : product.thumbnail}
                                                        alt={product.title}
                                                        className="rounded-full mx-auto w-[300px] h-[300px] object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No products available</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;
