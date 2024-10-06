import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: "/register", name: "Inscription" },
        { path: "/login", name: "Se connecter" },
    ];



    return (
        <header className="fixed z-50 w-full top-0 bg-black p-2">
            <nav>
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-white text-2xl font-bold">
                        <img className="w-10" src="/images/logo.png" alt="logo" />
                    </Link>

                    {/* Menu burger pour mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none z-50 relative"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Menu pour desktop */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            location.pathname !== link.path && (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-white hover:text-gray-300"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>

                {/* Menu mobile */}
                <div 
                    className={`fixed top-0 right-0 h-full w-full bg-black z-40 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        {navLinks.map((link) => (
                            location.pathname !== link.path && (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-white text-2xl my-4 hover:text-gray-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;