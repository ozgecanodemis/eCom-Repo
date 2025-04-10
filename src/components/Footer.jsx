import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

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
                <div className="grid grid-cols-1 gap-8 w-full ">
                    {/* Her başlık ayrı blok */}
                    <div>
                        <h3 className="font-semibold mb-2">Company Info</h3>
                        <ul className="space-y-1 text-gray-400 ">
                            <li><a href="/about" className="hover:text-white transition text-textColorWhite">About Us</a></li>
                            <li><a href="/careers" className="hover:text-white transition text-textColorWhite">Career</a></li>
                            <li><a href="/hiring" className="hover:text-white transition text-textColorWhite">We are hiring</a></li>
                            <li><a href="/blog" className="hover:text-white transition text-textColorWhite">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Legal</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="/terms" className="hover:text-white transition text-textColorWhite">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="hover:text-white transition text-textColorWhite">Privacy Policy</a></li>
                            <li><a href="/cookies" className="hover:text-white transition text-textColorWhite">Cookie Policy</a></li>
                            <li><a href="/disclaimer" className="hover:text-white transition text-textColorWhite">Disclaimer</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Features</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="/marketing" className="hover:text-white transition text-textColorWhite">Business Marketing</a></li>
                            <li><a href="/analytics" className="hover:text-white transition text-textColorWhite">User Analytic</a></li>
                            <li><a href="/chat" className="hover:text-white transition text-textColorWhite">Live Chat</a></li>
                            <li><a href="/support" className="hover:text-white transition text-textColorWhite">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="/support" className="hover:text-white transition text-textColorWhite">IOS & Android</a></li>
                            <li><a href="/support" className="hover:text-white transition text-textColorWhite">Watch a Demo</a></li>
                            <li><a href="/support" className="hover:text-white transition text-textColorWhite">Customers</a></li>
                            <li><a href="/support" className="hover:text-white transition text-textColorWhite">API</a></li>
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
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                            <Facebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                            <Instagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                            <Youtube />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                            <Twitter />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
