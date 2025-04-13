import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("Men");
    const tabs = ["Men", "Women", "Accessories"];

    return (
        <div className="p-4 border w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:hidden">
                {[...Array(4)].map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>

            <div className="hidden md:grid grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                    <ProductCard key={`desktop-${i}`} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
