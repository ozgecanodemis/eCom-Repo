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
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
            {promos.map((promo, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center w-full lg:w-[32%]"
                >
                    <p className="text-sm text-gray-500">{promo.titleTop}</p>
                    <h2 className="text-xl font-bold mt-1">{promo.titleMain}</h2>
                    <img
                        src={promo.image}
                        alt="Promo"
                        className="w-28 h-28 object-contain mt-4"
                    />
                    <a
                        href="#"
                        className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                    >
                        Explore Items
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ShopCards;
