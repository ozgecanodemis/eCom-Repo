

const Sidebar = () => {
    return (
        <div className="bg-yellow-400 p-4 border border-gray-800 rounded-lg shadow-md w-full sm:w-[300px]">
            <h2 className="text-sm font-bold text-white">FURNITURE</h2>
            <p className="text-white text-xs mt-1">5 items</p>
            <img
                src="/path-to-your-image.jpg"
                alt="Furniture"
                className="mt-4 w-full rounded-lg"
            />
        </div>
    );
};

export default Sidebar;
