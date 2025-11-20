import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import logo2 from '../../assets/logo3.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Structural Fabrication',
    'Piping Works',
    'Mechanical Equipment',
    'Electrical Works',
    'Painting Services',
    'HDPE Fabrication',
    'Labor Supply',
    'ESP Commissioning'
  ];

  return (
    <footer className="bg-zinc-100 text-gray-900">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* logo for footer */}
              <img src={logo2} alt="" className='h-16 w-28 sm:h-20 sm:w-32 lg:h-25 lg:w-40 ml-[-10px] sm:ml-[-15px]' />
            </div>
            <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-6 leading-relaxed">
              Delivering innovative and high-quality construction services with precision, safety, and efficiency for industrial and structural sectors.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-10 h-10 bg-gray-300 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-300 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-300 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-300 hover:bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-yellow-500 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-900 hover:text-yellow-500 transition-colors duration-200 group"
                  >
                    <ArrowRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-yellow-500 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center space-x-2 text-gray-900 hover:text-yellow-500 transition-colors duration-200 group">
                    <ArrowRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-yellow-500 inline-block">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-900">Elysium, H-905, Shantigram</p>
                  <p className="text-gray-900">Ahmedabad - 382421, Gujarat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-yellow-500" size={18} />
                <a
                  href="tel:+918292111172"
                  className="text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  +91 8292111172
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-yellow-500" size={18} />
                <a
                  href="mailto:jyadavst@gmail.com"
                  className="text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  jyadavst@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-yellow-500" size={18} />
                <span className="text-gray-900">Mon - Sat: 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-900 text-xs sm:text-sm">
              &copy; {currentYear} TRIVENI INFRAMECH PVT LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-900 hover:text-yellow-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-900 hover:text-yellow-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;