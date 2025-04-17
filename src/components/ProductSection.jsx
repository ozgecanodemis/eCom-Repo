import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

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
        "https://picsum.photos/id/1041/239/300",
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
        "https://picsum.photos/id/1041/239/300",
    ];

    const totalPages = Math.ceil(imgUrls.length / itemsPerPage);
    const currentItems = imgUrls.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="w-full">
            {/* Mobile */}
            <div className="grid grid-cols-1 gap-6 mt-6 md:hidden px-4">
                {currentItems.map((img, i) => (
                    <ProductCard key={`mobile-${i}`} img={img} />
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-4 lg:grid grid-cols-4   lg:gap-8 m-4">
                {currentItems.map((img, i) => (
                    <ProductCard key={`desktop-${i}`} img={img} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ProductSection;
