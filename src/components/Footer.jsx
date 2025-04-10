import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#252B42] text-textColorWhite px-6 py-16 text-sm font-montserrat text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center space-y-10">
                {/* Başlık & Buton */}
                <div>
                    <h2 className="font-bold text-lg">Consulting Agency For Your Business</h2>
                    <p className="my-2 text-gray-400">the quick fox jumps over the lazy dog</p>
                    <button className="btn-primary mt-4">Contact Us</button>
                </div>

                {/* Menü Alanı */}
                <div className="grid grid-cols-1 gap-8 w-full">
                    {/* Her başlık ayrı blok */}
                    <div>
                        <h3 className="font-semibold mb-2">Company Info</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Legal</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Features</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>IOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>
                </div>

                {/* İletişim Bilgileri */}
                <div className="text-gray-400">
                    <h3 className="font-semibold mb-2 text-textColorWhite">Get In Touch</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center justify-center gap-2">
                            <Phone size={16} /> (480) 555-0103
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <MapPin size={16} /> 4517 Washington Ave.
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <Mail size={16} /> debra.holt@example.com
                        </li>
                    </ul>
                </div>

                {/* Alt Bilgi */}
                <div className="border-t border-gray-600 pt-6 w-full text-gray-400">
                    <p className="mb-4">
                        Made With Love By Finland
                        <br /> All Rights Reserved
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#"><i className="fab fa-facebook text-textColorWhite hover:text-primary"></i></a>
                        <a href="#"><i className="fab fa-instagram text-textColorWhite hover:text-primary"></i></a>
                        <a href="#"><i className="fab fa-twitter text-textColorWhite hover:text-primary"></i></a>
                        <a href="#"><i className="fab fa-youtube text-textColorWhite hover:text-primary"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
