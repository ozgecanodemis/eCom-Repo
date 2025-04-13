import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-center  space-x-16 md:flex-row md:justify-between md:space-y-0">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        Bandage
                    </Link>

                    {/* Navigation - only visible on md and up */}
                    <nav className="hidden md:flex items-center space-x-8 ">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/product" className="text-gray-600 hover:text-gray-900">Product</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-600 hover:text-gray-900">
                            <Search size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                            <User size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                            <ShoppingCart size={20} />
                        </button>
                        {/* Hamburger for mobile */}
                        <button
                            className="md:hidden text-gray-600 hover:text-gray-900"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <nav className="mt-8 flex flex-col items-center space-y-8 md:hidden">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/product" className="text-gray-600 hover:text-gray-900">Product</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
