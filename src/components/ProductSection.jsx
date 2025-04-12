import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState("Men");
    const tabs = ["Men", "Women", "Accessories"];

    return (
        <div className="p-4 border border-gray-300 rounded-lg w-full">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <h2 className="font-bold text-sm">BESTSELLER PRODUCTS</h2>
                <div className="flex gap-4 text-sm">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`${activeTab === tab ? "text-black font-bold" : "text-gray-400"}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {[...Array(6)].map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
