import { Link } from 'react-router';
import { Leaf, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <img 
              src="https://i.ibb.co/4wTSJGKF/529455168-17845612725541850-6560427822974292227-n.jpg" 
              alt="Thornton's Lawn & Landscape Logo" 
              className="h-12 w-auto object-contain rounded-md mb-4" 
            />
            <div className="uppercase text-[0.7rem] tracking-[0.1em] text-brand-100/60 font-semibold mb-3">Thornton's Lawn & Landscape</div>
            <p className="text-[0.9rem] text-brand-100/90 leading-relaxed max-w-md mb-6">
              Expert tree lopping, lawn care, and landscaping. Reliable, professional, and passionate about every project.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thorntonslawnandlandscaping?igsh=MmUzc2YwMWt6bzVn" target="_blank" rel="noreferrer" className="text-brand-100/60 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="uppercase text-[0.7rem] tracking-[0.1em] text-brand-100/60 font-semibold mb-3">Services</div>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-[0.9rem] text-brand-100/80 hover:text-white transition-colors">Lawn Mowing & Edging</Link></li>
              <li><Link to="/services" className="text-[0.9rem] text-brand-100/80 hover:text-white transition-colors">Hedging & Pruning</Link></li>
              <li><Link to="/services" className="text-[0.9rem] text-brand-100/80 hover:text-white transition-colors">Yard Clean-Ups</Link></li>
              <li><Link to="/services" className="text-[0.9rem] text-brand-100/80 hover:text-white transition-colors">Complete Makeovers</Link></li>
            </ul>
          </div>

          <div>
            <div className="uppercase text-[0.7rem] tracking-[0.1em] text-brand-100/60 font-semibold mb-3">Get In Touch</div>
            <ul className="space-y-3">
              <li>
                <a href="tel:0490894087" className="text-[0.9rem] font-medium text-white hover:text-brand-200 transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-100/60" />
                  0490 894 087
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-[0.9rem] font-medium text-white hover:text-brand-200 transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-100/60" />
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.8rem] text-brand-100/50">
          <p>&copy; {new Date().getFullYear()} Thornton's Lawn & Landscape. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-brand-100 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-brand-100 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-brand-100 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
