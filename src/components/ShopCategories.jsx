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
            <div className="bg-#FAFAFA p-4 w-full">
                <div className=" flex flex-col md:flex-row md:justify-between md:mx-6 justify-center  ">
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
                        </a>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-1 lg:flex lg:flex-row lg:justify-between pb-4">
                    {promos.map((promo, index) => (
                        <div
                            key={index}
                            className="relative bg-cover bg-center rounded-sm shadow-md w-[332px] h-[300px] md:w-[205px] md:h-[223px]  lg:w-[205px] lg:h-[223px] mx-auto  text-textColorWhite overflow-hidden"
                            style={{ backgroundImage: `url(${promo.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                                <h5 className="text-xl  text-textColorWhite font-bold">{promo.titleTop}</h5>
                                <h6 className="text-sm text-textColorWhite font-bold mt-1">{promo.titleMain}</h6>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShopCategories;
