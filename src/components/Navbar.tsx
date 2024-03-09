// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-xl">My App</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-white">Home</a>
                            <a href="/about" className="text-white">About</a>
                            <a href="#" className="text-white">Services</a>
                            <a href="#" className="text-white">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
