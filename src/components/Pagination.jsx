const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-0 text-sm font-medium overflow-hidden  h-[74px] ">
            {/* First */}
            <button
                onClick={() => handleClick(1)}
                disabled={currentPage === 1}
                className={`px-4  w-[83px] bg-[#F3F3F3] h-[74px] py-2  text-secondTextColor font-bold ${currentPage === 1
                    ? 'bg-gray-100 text-secondTextColor font-bold cursor-not-allowed'
                    : 'text-blue-500 hover:bg-[#23A6F0]'
                    }`}
            >
                First
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={`px-4 w-[49px] h-[74px]  py-2 text-secondTextColor font-bold ${currentPage === number
                        ? 'bg-blue-500 text-secondTextColor font-bold'
                        : 'text-blue-500 hover:bg-[#23A6F0]'
                        }`}
                >
                    {number}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-[#F3F3F3] text-secondTextColor font-bold w-[83px] h-[74px] ${currentPage === totalPages
                    ? 'bg-gray-100  text-secondTextColor font-bold'
                    : 'text-blue-500 hover:bg-[#23A6F0]'
                    }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
