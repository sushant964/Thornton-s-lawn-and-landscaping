import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-b border-stone-100' : 'bg-white border-b border-stone-100'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-6 px-6 lg:px-16" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Thornton's Lawn & Landscape</span>
            <img 
              src="https://i.ibb.co/4wTSJGKF/529455168-17845612725541850-6560427822974292227-n.jpg" 
              alt="Thornton's Lawn & Landscape Logo" 
              className="h-16 w-auto object-contain rounded-md" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextEl) nextEl.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-3" style={{ display: 'none' }}>
              <div className="bg-brand-700 text-white h-8 w-8 text-center flex items-center justify-center rounded-md font-bold shadow-sm">
                T
              </div>
              <span className="font-bold text-[1.25rem] tracking-[-0.5px] text-stone-900">Thornton's <span className="text-brand-500 font-normal">Lawn & Landscape</span></span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-700 hover:text-brand-600 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => 
                `text-[0.9rem] font-medium transition-colors ${isActive ? 'text-brand-700' : 'text-stone-900 hover:text-brand-700'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-[0.9rem] font-semibold bg-brand-700 text-white px-6 py-2.5 rounded shadow-[0_4px_12px_rgba(45,106,79,0.15)] hover:bg-brand-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-50 bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="https://i.ibb.co/4wTSJGKF/529455168-17845612725541850-6560427822974292227-n.jpg" 
                  alt="Thornton's Lawn & Landscape Logo" 
                  className="h-12 w-auto object-contain rounded-md" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center gap-3" style={{ display: 'none' }}>
                  <div className="bg-brand-700 text-white h-8 w-8 text-center flex items-center justify-center rounded-md font-bold shadow-sm">
                    T
                  </div>
                  <span className="font-bold text-[1.25rem] tracking-[-0.5px] text-stone-900">Thornton's <span className="text-brand-500 font-normal">Lawn & Landscape</span></span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-stone-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root px-6">
              <div className="-my-6 divide-y divide-stone-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive ? 'bg-stone-50 text-brand-600' : 'text-stone-900 hover:bg-stone-50'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-stone-900 hover:bg-stone-50"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
