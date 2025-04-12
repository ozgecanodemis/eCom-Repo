const ProductCard = () => {
    return (
        <div className="text-center">
            <img src="/product-image.jpg" alt="Product" className="mx-auto rounded-full w-24 h-24" />
            <h3 className="text-sm font-semibold mt-2">Graphic Design</h3>
            <p className="text-xs text-gray-400">English Department</p>
            <p className="text-xs mt-1 line-through text-gray-400">$16.48</p>
            <p className="text-sm font-bold text-green-600">$6.48</p>
        </div>
    );
};
export default ProductCard;