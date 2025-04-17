import {
    Phone,
    MapPin,
    Mail,
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#252B42] px-6 py-16 font-montserrat text-sm text-textColorWhite">
            {/* Üst Kısım */}
            <div className="mx-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-16 text-center lg:text-left">
                    {/* Başlık ve Açıklama */}
                    <div>
                        <h2 className="text-lg font-bold">Consulting Agency For Your Business</h2>
                        <p className="mt-2 opacity-70">the quick fox jumps over the lazy dog</p>
                    </div>

                    {/* Buton */}
                    <div className="mt-6 lg:mt-0">
                        <button className="bg-[#23A6F0] text-white px-6 py-2 rounded hover:opacity-90 transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Menü Bölgesi */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center sm:text-left">
                    <div>
                        <h3 className="font-bold mb-2">Company Info</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">About Us</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Carrier</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">We are hiring</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">About Us</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Carrier</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">We are hiring</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Features</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Business Marketing</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">User Analytic</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Live Chat</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">IOS & Android</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Watch a Demo</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">Customers</a></li>
                            <li><a href="#" className="text-textColorWhite hover:opacity-90 transition">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-center sm:justify-start items-center gap-2"><Phone size={16} /> (480) 555-0103</li>
                            <li className="flex justify-center sm:justify-start items-center gap-2"><MapPin size={16} /> 4517 Washington Ave.</li>
                            <li className="flex justify-center sm:justify-start items-center gap-2"><Mail size={16} /> debra.holt@example.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Alt Bilgi */}
            <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mt-12 text-center lg:text-left gap-4">
                <p>
                    Made With Love By Finland All Right Reserved
                </p>
                <div className="flex space-x-4 justify-center">
                    <a href="#"><Facebook size={18} /></a>
                    <a href="#"><Instagram size={18} /></a>
                    <a href="#"><Twitter size={18} /></a>
                </div>
            </div>
        </footer>
    );
}
