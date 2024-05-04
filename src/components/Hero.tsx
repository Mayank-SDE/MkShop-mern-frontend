import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fragrance from '../assets/categoriesBanner/fragnance.jpeg';
import groceries from '../assets/categoriesBanner/groceries.jpeg';
import homeDecoration from '../assets/categoriesBanner/homedecor.jpeg';
import laptops from '../assets/categoriesBanner/laptop.jpeg';
import menShirts from '../assets/categoriesBanner/men-shirts.jpeg';
import menShoes from '../assets/categoriesBanner/men-shoes.jpeg';
import mensWatch from '../assets/categoriesBanner/men-watch.jpeg';
import skincare from '../assets/categoriesBanner/skincare.png';
import smartphones from '../assets/categoriesBanner/smartphones.jpg';
import sunglasses from '../assets/categoriesBanner/sunglasses.jpeg';
import womenDresses from '../assets/categoriesBanner/women-dresses.jpeg';
import womenJewellery from '../assets/categoriesBanner/women-jwellery.jpeg';
import womenShoes from '../assets/categoriesBanner/women-shoes.jpeg';
import womenWatch from '../assets/categoriesBanner/women-watch.jpeg';
import womenBags from '../assets/categoriesBanner/women-bags.avif';
import furniture from '../assets/categoriesBanner/furniture.avif';
import tops from '../assets/categoriesBanner/tops.avif';

const HeroSectionBanner = [
    {
        id: 1,
        img: smartphones,
        title: 'Upto 10% off on all smartphones',
        description: 'Browse, Click, Enjoy: Your Smartphone Paradise Awaits!',
    },
    {
        id: 2,
        img: laptops,
        title: 'Unleash Your Potential with Our Laptop Collection',
        description: 'Powerful Portables: Discover Our Selection of Laptops!',
    },
    {
        id: 3,
        img: fragrance,
        title: 'Indulge Your Senses with Our Fragrance Collection',
        description: 'Scent-sational Finds: Shop the Best Fragrances Online!',
    },
    {
        id: 4,
        img: skincare,
        title: 'Unlock Radiant Skin with Our Skincare Range',
        description:
            "Glow Getter's Paradise: Unlock Radiant Skin with Our Skincare Range!",
    },
    {
        id: 5,
        img: groceries,
        title: 'Stock Up Your Pantry with Quality Groceries',
        description: 'Fresh and Flavorful: Shop for Quality Groceries Online!',
    },
    {
        id: 6,
        img: homeDecoration,
        title: 'Elevate Your Space with Our Home Decoration Collection',
        description:
            'Transform Your Space: Explore Our Home Decoration Collection!',
    },
    {
        id: 7,
        img: furniture,
        title: 'Furnish Your Dreams with Our Furniture Collection',
        description: 'Furnish Your Dreams: Discover Our Furniture Collection!',
    },
    {
        id: 8,
        img: tops,
        title: 'Top it Off in Style with Our Trendy Tops',
        description: 'Top it Off in Style: Shop Our Trendy Tops Collection!',
    },
    {
        id: 9,
        img: womenDresses,
        title: "Make a Statement with Our Women's Dresses",
        description:
            "Dress to Impress: Explore Our Stunning Collection of Women's Dresses!",
    },
    {
        id: 10,
        img: womenShoes,
        title: "Step into Style with Our Women's Shoe Collection",
        description: "Step into Style: Discover Our Women's Shoe Collection!",
    },
    {
        id: 11,
        img: menShirts,
        title: "Upgrade Your Wardrobe with Our Men's Shirts",
        description: "Upgrade Your Wardrobe: Explore Our Men's Shirts Collection!",
    },
    {
        id: 12,
        img: menShoes,
        title: "Put Your Best Foot Forward with Our Men's Shoes",
        description:
            "Put Your Best Foot Forward: Discover Our Men's Shoes Collection!",
    },
    {
        id: 13,
        img: mensWatch,
        title: "Stay Punctual and Stylish with Our Men's Watches",
        description:
            "Stay Punctual and Stylish: Explore Our Men's Watches Collection!",
    },
    {
        id: 14,
        img: womenWatch,
        title: "Accessorize with Elegance: Women's Watches Collection",
        description:
            "Accessorize with Elegance: Explore Our Women's Watches Collection!",
    },
    {
        id: 15,
        img: womenBags,
        title: "Carry Your Essentials in Style with Women's Bags",
        description:
            "Carry Your Essentials in Style: Explore Our Women's Bags Collection!",
    },
    {
        id: 16,
        img: womenJewellery,
        title: "Enhance Your Look with Women's Jewelry",
        description: "Enhance Your Look: Explore Our Women's Jewelry Collection!",
    },
    {
        id: 17,
        img: sunglasses,
        title: 'Stay Fashionable and Protected with Sunglasses',
        description:
            'Stay Fashionable and Protected: Explore Our Sunglasses Collection!',
    },
];
const Hero = () => {
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
        <div className="container min-h-[550px] sm:min-h-[650px]  flex justify-center items-center duration-200 relative overflow-hidden dark:border-slate-100 border-b-2 border-slate-900  dark:text-slate-100 dark:bg-slate-900 bg-slate-100 text-slate-900">
            {/* background pattern */}
            <div className="h-[700px] w-[700px] bg-slate-900  dark:bg-slate-300 absolute -top-[70%] right-0 rounded-xl rotate-45 "></div>
            {/* Hero Section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {HeroSectionBanner.map((data) => {
                        return (
                            <div key={data.id} className="px-5">
                                <div className="grid grid-cols-1 md:grid-cols-2  sm:mt-50 ">
                                    {/* Text content section */}
                                    <div className="flex flex-col gap-4 justify-center pt-12 mt-20 sm:mt-[1rem] sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 bg-slate-100 dark:bg-slate-900 rounded-xl">
                                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                                            {data.title}
                                        </h1>
                                        <p className="text-sm sm:text-lg">
                                            {data.description}
                                        </p>
                                        <div>
                                            <button
                                                // onClick={() => handleOrderPopup()}
                                                className=" bg-slate-900 text-slate-100 dark:text-slate-900 dark:bg-slate-100 hover:scale-110 duration-200 py-2 px-4 rounded-full"
                                            >
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* Image Section */}
                                    <div className="order-1 sm:order-2 ">
                                        <div className="relative z-10 mt-2 ">
                                            <img
                                                src={data.img}
                                                alt={data.title}
                                                className="rounded-full mx-auto "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Hero