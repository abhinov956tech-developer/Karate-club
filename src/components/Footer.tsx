import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name,setname] = useState("");
  function handleSubmit(){
    if(email!=""){
      try{
        axios.post('https://newsletter-api-xi.vercel.app/subscriber/subscribe',{
          email:email,
          name:name
        }).then((response:any)=>{
          console.log(response.data)
        })
        setEmail('');
        setname('');
      }catch(error){
        console.error('Error while',error);
      }
    }
  }

  return (
    <footer className="bg-karate-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-6">Stay updated with the latest news, events, and achievements</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter name"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
               onClick={handleSubmit}
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">DDKA</h3>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              Empowering Martial Arts, Building Champions in Dibrugarh District.
            </p>
          </div>
          
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["About", "Programs", "Events", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase()}`} 
                    className="text-xs sm:text-base text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link} {link === "About" ? "Us" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-xs sm:text-base text-gray-300">
                  Dibrugarh, Assam - 786001
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-xs sm:text-base text-gray-300">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-xs sm:text-base text-gray-300">
                  contact@ddka.org
                </span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold">Connect</h4>
            <p className="text-xs sm:text-base text-gray-300 mb-4">Follow us on social media</p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-base text-gray-300 order-2 sm:order-1">
              © {new Date().getFullYear()} Dibrugarh District Karate Association
            </p>
            <div className="flex flex-col sm:flex-row gap-4 order-1 sm:order-2 mb-4 sm:mb-0">
              <Link to="/privacy" className="text-xs sm:text-base text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs sm:text-base text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;