import ProductSection from "../components/ProductSection";
import Sidebar from "../components/SideBar";

const ProductsPage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-screen-xl mx-auto">
            {/* Sidebar üstte mobilde, sağda desktopta */}
            <Sidebar />
            <ProductSection />
        </div>
    );
};

export default ProductsPage;
