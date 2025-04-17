const Blog = () => {
    return (
        <div className="container flex flex-col justify-center items-center mb-6">
            <div className="flex flex-col w-full mx-auto">
                {/* Header Section */}
                <div className="mb-6 flex flex-col items-center ">
                    <h6 className="font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center">
                        Practice Advice
                    </h6>
                    <h2 className="w-[239px] md:w-[430px] h-[100px] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center text-[#252B42]">
                        Featured Products
                    </h2>
                </div>

                {/* Product Cards */}
                <div className="flex flex-col justify-center items-center gap-6 md:flex-row ">
                    {/* Product Card 1 */}
                    <div className="border border-[#E8E8E8] overflow-hidden w-[328px] h-auto sm:w-[330px] md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Meat Package" className="w-[330px] h-[300px] mx-auto" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className="font-bold text-base mb-2">Loudest à la Madison #1 (L'Intégral)</h3>
                            <p className="text-sm text-[#737373] mb-2">
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </p>
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>22 April 2021</span>
                                <span className="flex items-center">

                                    10 comments
                                </span>
                            </div>
                            <button className="text-[#737373] text-sm font-medium flex items-center">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="border border-[#E8E8E8] overflow-hidden w-[328px] h-auto sm:w-[330px] md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <img src="https://picsum.photos/200/303" alt="Meat Package" className="w-full h-[300px] " />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className="font-bold text-base mb-2">Loudest à la Madison #1 (L'Intégral)</h3>
                            <p className="text-sm text-[#737373] mb-2">
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </p>
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>22 April 2021</span>
                                <span className="flex items-center">

                                    10 comments
                                </span>
                            </div>
                            <button className="text-[#737373] text-sm font-medium flex items-center">
                                Learn More

                            </button>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="border border-[#E8E8E8] overflow-hidden w-[328px] h-auto sm:w-[330px] md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">NEW</div>
                            <img src="https://picsum.photos/200/302" alt="Meat Package" className="w-full h-[300px] " />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className="font-bold text-base mb-2">Loudest à la Madison #1 (L'Intégral)</h3>
                            <p className="text-sm text-[#737373] mb-2">
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </p>
                            <div className="flex justify-between text-xs text-[#737373] mb-2">
                                <span>22 April 2021</span>
                                <span className="flex items-center">

                                    10 comments
                                </span>
                            </div>
                            <button className="text-[#737373] text-sm font-medium flex items-center">
                                Learn More

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
