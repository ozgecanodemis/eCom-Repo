import Carousel from "../components/Carousel";
import ShopCards from "../components/ShopCards"
import MostPopular from "../components/MostPopular";
import CategoryPanel from "../components/CategoryPanel";
import Blog from "../components/Blog";
import Brands from "../components/brands";
import BestSellerProducts from "../components/BestsellerProducts";


const HomePage = () => {
    return (
        <>
            <Carousel />
            <ShopCards />
            <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-screen-xl mx-auto">
                <BestSellerProducts />
                <CategoryPanel />
            </div>
            <MostPopular />
            <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-screen-xl mx-auto">
                <BestSellerProducts />
                <CategoryPanel />
            </div>
            <MostPopular />
            <Brands />
            <Blog />
        </>
    );
};

export default HomePage;
