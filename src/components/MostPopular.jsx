"use client"

import ProductCard from "./ProductCard"

const MostPopular = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-screen-xl mx-auto">
        {/* Image section */}
        <div className="w-[full] lg:w-1/2 order-1 lg:order-1 h-[505px]">
          <img
            src="https://picsum.photos/500/303"
            alt="Meat Package"
            className="w-full h-full object-cover "
            style={{ minHeight: "100%" }}
          />
        </div>

        {/* Text and Product Cards section */}
        <div className="w-[full] lg:w-1/2 order-2 bg-gray-100 p-4 rounded-lg h-auto">
          <div className="h-full flex flex-col justify-center items-center">
            <h3 className=" font-bold text-[24px] leading-[32px] tracking-[0.1px] text-center mb-2">
              MOST POPULAR
            </h3>
            <p className="w-[280px] h-[60px] ttext-[14px] leading-[20px] tracking-[0.1px] text-center mb-2 text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>

            <div className="w-full bg-white rounded-lg shadow-md p-4 mb-4 flex-grow">
              <div className="grid grid-cols-1 gap-6">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-auto order-2 lg:order-2 bg-gray-100 p-4 rounded-lg max-w-screen-xl mx-auto mt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Easy to use</h2>
          <p className="text-sm text-gray-600">Things on a very small that you have any direct</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Easy to use</h2>
          <p className="text-sm text-gray-600">Things on a very small that you have any direct</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Easy to use</h2>
          <p className="text-sm text-gray-600">Things on a very small that you have any direct</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Easy to use</h2>
          <p className="text-sm text-gray-600">Things on a very small that you have any direct</p>
        </div>
      </div>
    </div>
  )
}

export default MostPopular
