import Carousel from "../components/Carousel";
import ShopCards from "../components/ShopCards";
import MostPopular from "../components/MostPopular";
import CategoryPanel from "../components/CategoryPanel";
import Blog from "../components/Blog";
import Brands from "../components/brands";
import BestSelProducts from "../components/BestSelProducts";

const HomePage = () => {
    return (
        <>
            <Carousel />
            <ShopCards />
            <div className="flex flex-col lg:flex-row lg:space-x-8  py-8 max-w-screen-xl mx-auto">
                <div className="w-full lg:w-2/5">
                    <CategoryPanel />
                </div>
                <div className="w-full lg:w-3/4">
                    <BestSelProducts />
                </div>
            </div>
            <MostPopular />
            <div className="flex flex-col lg:flex-row lg:space-x-8  py-8 max-w-screen-xl mx-auto">

                <div className="w-full lg:w-3/4">
                    <BestSelProducts />
                </div>
                <div className="w-full lg:w-2/5">
                    <CategoryPanel />
                </div>
            </div>
            <MostPopular />
            <div className="w-full lg:w-3/4 md:hidden lg:hidden">
                <BestSelProducts />
            </div>
            <Brands />
            <Blog />
        </>
    );
};

export default HomePage;
