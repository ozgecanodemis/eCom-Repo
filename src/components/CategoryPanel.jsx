import categorypanel from '../assets/categorypanel.jpeg';

const CategoryPanel = () => {
    return (

        <div className='flex justify-center p-4'>
            <div
                className="w-[389px] sm:h-[664px] md:h-[796px]  bg-cover bg-center "
                style={{ backgroundImage: `url(${categorypanel})` }}
            >
                <div className="bg-black/40 p-4 rounded-lg m-4 flex flex-col items-start">
                    <h2 className="text-[14px] font-bold text-white">FURNITURE</h2>
                    <p className="text-secondTextColor font-bold text-[14px] mt-1">5 Items</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryPanel;
