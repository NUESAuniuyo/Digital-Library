import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-nuesa-green rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">NUESA E-Library</h3>
                <p className="text-sm text-gray-400">Making Learning Easy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your comprehensive digital library for Faculty of Engineering, University of Uyo. 
              Access course materials, resources, and connect with the NUESA community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-nuesa-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-nuesa-orange transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-300 hover:text-nuesa-orange transition-colors">
                  Faculty Map
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-nuesa-orange transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-nuesa-orange transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-nuesa-orange">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-nuesa-green" />
                <span className="text-gray-300 text-sm">
                  Faculty of Engineering, University of Uyo, Akwa Ibom State
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-nuesa-green" />
                <span className="text-gray-300 text-sm">nuesa@uniuyo.edu.ng</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-nuesa-green" />
                <span className="text-gray-300 text-sm">+234 (0) 85 200 2345</span>
              </li>
            </ul>
          </div>

          {/* Google AdSense Space */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-nuesa-orange">Advertisement</h4>
            <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-600">
              <div className="text-center text-gray-500">
                <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-xs">AD</span>
                </div>
                <p className="text-xs">Google AdSense</p>
                <p className="text-xs">300x250</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow NUESA:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nuesa-green transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nuesa-green transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nuesa-green transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 NUESA Uniuyo E-Library. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Developed with ❤️ for NUESA Community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom AdSense Banner */}
      <div className="bg-gray-800 py-4">
        <div className="container-custom">
          <div className="bg-gray-700 rounded-lg p-4 h-20 flex items-center justify-center border-2 border-dashed border-gray-600">
            <div className="text-center text-gray-500">
              <span className="text-sm">Google AdSense Banner - 728x90</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
