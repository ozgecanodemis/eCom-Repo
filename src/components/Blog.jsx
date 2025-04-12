const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col w-full mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <p className="text-[#737373] text-sm font-medium mb-1">Practice Advice</p>
                    <h2 className="text-[#252B42] text-2xl font-bold">Featured Products</h2>
                </div>

                {/* Product Cards */}
                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
                    {/* Product Card 1 */}
                    <div className="border border-[#E8E8E8] rounded-lg overflow-hidden flex-1 md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <img src="https://picsum.photos/200/300" alt="Meat Package" className="w-full h-[300px] rounded-lg" />
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
                    <div className="border border-[#E8E8E8] rounded-lg overflow-hidden flex-1 md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <img src="https://picsum.photos/200/303" alt="Meat Package" className="w-full h-[300px] rounded-lg" />
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
                    <div className="border border-[#E8E8E8] rounded-lg overflow-hidden flex-1 md:min-w-[300px] md:max-w-[400px]">
                        <div className="relative">
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">NEW</div>
                            <img src="https://picsum.photos/200/302" alt="Meat Package" className="w-full h-[300px] rounded-lg" />
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
