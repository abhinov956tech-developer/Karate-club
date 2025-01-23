import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Clubs", path: "/club" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/auth" },
  ];

  return (
    <nav className="fixed w-full border-b bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="h-16 w-16 p-3 rounded-full">
                <img src="/logo.jpg" className="object-cover"></img>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-karate-dark hover:text-karate-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-karate-primary text-white hover:bg-karate-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Join Now
              </Link> 
             {/* <Link
                to="/auth"
                className="bg-karate-primary text-white hover:bg-karate-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>*/}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-karate-dark hover:text-karate-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-karate-dark hover:text-karate-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-karate-primary text-white hover:bg-karate-primary/90 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;