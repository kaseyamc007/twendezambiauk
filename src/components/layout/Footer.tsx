import { Link } from "react-router-dom";
import { Facebook, Mail, Phone, Globe } from "lucide-react";
import logoImg from "@/assets/images/zambian_community_uk_1779202184111.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImg}
                alt="Twende Zambia UK Logo"
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-bold text-xl text-white">Twende Zambia UK</span>
            </div>
            <p className="text-sm leading-relaxed">
              An independent, non-partisan, non-profit community organization supporting Zambians in the United Kingdom during life's most difficult moments.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@twendezambia.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+44 7376 575093</span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-secondary shrink-0" />
                <span>www.twendezambia.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-lg">Our Goal</h3>
            <div className="bg-slate-800/50 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Member Target</span>
                <span>335 Members</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="w-[45%] h-full bg-secondary" />
              </div>
              <p className="text-xs italic">
                Support fund of £10,000 available once goal is reached.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>
            © {currentYear} Twende Zambia UK. All Rights Reserved. 
            <span className="block md:inline md:ml-4 text-slate-500">Independent • Non-Partisan • Non-Profit</span>
          </p>
          <div className="flex space-x-6 text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
