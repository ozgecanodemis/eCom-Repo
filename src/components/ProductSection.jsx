import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("Men");
    const tabs = ["Men", "Women", "Accessories"];

    const imgUrls = [
        "https://picsum.photos/id/1011/239/300",
        "https://picsum.photos/id/1012/239/300",
        "https://picsum.photos/id/1013/239/300",
        "https://picsum.photos/id/1015/239/300",
        "https://picsum.photos/id/1016/239/300",
        "https://picsum.photos/id/1018/239/300",
        "https://picsum.photos/id/1020/239/300",
        "https://picsum.photos/id/1024/239/300",
        "https://picsum.photos/id/1027/239/300",
        "https://picsum.photos/id/1035/239/300",
        "https://picsum.photos/id/1037/239/300",
        "https://picsum.photos/id/1041/239/300"
    ];

    return (
        <div className="p-4 border w-full">
            {/* Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:hidden">
                {[...Array(4)].map((_, i) => (
                    <ProductCard key={i} img={imgUrls[i % imgUrls.length]} />
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                    <ProductCard key={`desktop-${i}`} img={imgUrls[i % imgUrls.length]} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
