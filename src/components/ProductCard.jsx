const ProductCard = () => {
    return (
        <div className=" sm:w-[348px] sm:h-[589px] md:w-[183px] md:h-[324px] lg:w-[183px] lg:h-[324px] m-auto gap-4 flex flex-col justify-center items-center text-center">
            <img src="https://picsum.photos/200/300" alt="Product" className="mx-auto w-[348px] h-[427px] md:w-[183px] md:h-[162px] lg:w-[183px] lg:h-[162px]  " />

            <div className="w-[183px] h-[162px] mt-8 flex flex-col justify-center items-center text-center">
                <h3 className="text-sm font-semibold mt-2">Graphic Design</h3>
                <p className="text-xs text-gray-400">English Department</p>
                <p className="text-xs mt-1 line-through text-gray-400">$16.48</p>
                <p className="text-sm font-bold text-green-600">$6.48</p>


                {/* Renk Dots */}
                <div className="flex justify-center gap-2 mt-3">
                    <span className="w-3 h-3 rounded-full bg-dotColorBlue"></span>
                    <span className="w-3 h-3 rounded-full bg-dotColorGreen"></span>
                    <span className="w-3 h-3 rounded-full bg-dotColorOrange"></span>
                    <span className="w-3 h-3 rounded-full bg-dotColorBlack"></span>
                </div>
            </div>
        </div>


    );
};
export default ProductCard;