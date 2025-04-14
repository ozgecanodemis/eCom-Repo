import { useState } from "react";
import ProductCard from "./ProductCard";

const BestSelProducts = () => {
    const [activeTab, setActiveTab] = useState("Men");
    const tabs = ["Men", "Women", "Accessories"];

    return (
        <div className=" flex flex-col  items-center p-4  rounded-lg w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col gap-6 sm:flex-row items-center justify-between sm:items-center gap-2">
                <h2 className="font-bold text-lg text-black">BESTSELLER PRODUCTS</h2>
                <div className="flex gap-4 text-sm">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`${activeTab === tab
                                ? "text-secondTextColor font-bold"
                                : "text-secondTextColor"
                                }`}
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

export default BestSelProducts;
