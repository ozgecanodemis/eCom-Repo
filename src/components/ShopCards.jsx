import React from "react";

const ShopCards = () => {
    const promos = [
        {
            titleTop: "Your Space",
            titleMain: "Unique Life",
            image: "/images/icecream.png", // public klasörüne koy
        },
        {
            titleTop: "Ends Today",
            titleMain: "Elements Style",
            image: "/images/apples.png",
        },
        {
            titleTop: "Ends Today",
            titleMain: "Elements Style",
            image: "/images/ham.png",
        },
    ];

    return (
        <div className="flex flex-col gap-[10px]   sm:grid-cols-1 lg:flex lg:flex-row lg:justify-between md:justify-between bg-[#FAFAFA] items-center pb-4">
            {promos.map((promo, index) => (
                <div
                    key={index}
                    className="bg-white rounded-sm border-[#ECECEC]  p-4 shadow-md flex flex-col items-center text-center w-[332px] h-[232px] mt-8 "
                >
                    <div
                        className="relative w-full h-48 bg-cover bg-center flex flex-col justify-center items-start gap-2 p-4"
                        style={{ backgroundImage: `url(${promo.image})` }}
                    >
                        <p className="text-[14px] font-[700] text-secondTextColor bg-white/80 px-2 rounded">
                            {promo.titleTop}
                        </p>
                        <h2 className="font-bold text-[24px] w-[94px] text-black bg-white/80 px-2 rounded text-left">
                            {promo.titleMain}
                        </h2>

                        <a
                            href="#"
                            className="text-sm font-[700] text-dotColorBlack hover:underline bg-white/80 px-2 rounded mt-4"
                        >
                            Explore Items
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ShopCards;
