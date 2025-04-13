import { ChevronRight } from "lucide-react";

const ShopCategories = () => {
    const promos = [
        {
            titleTop: "Cloths",
            titleMain: "5 Items",
            image: "https://picsum.photos/400/300",
        },
        {
            titleTop: "Cloths",
            titleMain: "5 Items",
            image: "https://picsum.photos/401/300",
        },
        {
            titleTop: "Cloths",
            titleMain: "5 Items",
            image: "https://picsum.photos/402/300",
        },
        {
            titleTop: "Cloths",
            titleMain: "5 Items",
            image: "https://picsum.photos/403/300",
        },
        {
            titleTop: "Cloths",
            titleMain: "5 Items",
            image: "https://picsum.photos/404/300",
        },
    ];
    return (
        <>
            <h3 className="text-2xl font-semibold m-6 text-center ">Shop</h3>
            <div className="flex flex-row justify-center items-center m-4 ">
                <a
                    href="/"
                    className=" text-m  text-dotColorBlack font-bold hover:underline"
                >
                    Home
                </a>

                <ChevronRight />

                <a
                    href="/shop"
                    className=" text-m text-dotColorBlack font-bold hover:underline"
                >
                    Shop
                </a></div>

            <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between pb-4">
                {promos.map((promo, index) => (
                    <div
                        key={index}
                        className="relative bg-cover bg-center rounded-sm shadow-md w-[80%] mx-auto lg:w-[32%] h-64 text-white overflow-hidden"
                        style={{ backgroundImage: `url(${promo.image})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                            <p className="text-sm  text-textColorWhite font-bold">{promo.titleTop}</p>
                            <h2 className="text-xl text-textColorWhite font-bold mt-1">{promo.titleMain}</h2>
                            <a
                                href="#"
                                className="mt-4 text-sm font-semibold hover:underline"
                            >
                                Discover Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopCategories;
