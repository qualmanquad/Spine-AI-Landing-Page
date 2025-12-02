import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-slate-1/80 backdrop-blur-md z-40 border-b border-slate-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-12 rounded-lg flex items-center justify-center">
               <div className="w-3 h-3 bg-slate-1 rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-slate-12">
              spine
            </span>
          </div>
          
          {/* Centered Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#community" className="text-sm font-medium text-slate-11 hover:text-slate-12 transition-colors">Community</a>
            <a href="#roadmap" className="text-sm font-medium text-slate-11 hover:text-slate-12 transition-colors">Roadmap</a>
            <a href="#gallery" className="text-sm font-medium text-slate-11 hover:text-slate-12 transition-colors">Gallery</a>
            <a href="#pricing" className="text-sm font-medium text-slate-11 hover:text-slate-12 transition-colors">Pricing</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-slate-12 hover:text-slate-11 px-3 py-2">
              Login
            </button>
            <button className="bg-slate-12 text-slate-1 px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-colors shadow-sm">
              Get started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-12">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-1 border-b border-slate-6 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#community" className="block px-3 py-2 text-base font-medium text-slate-11">Community</a>
            <a href="#roadmap" className="block px-3 py-2 text-base font-medium text-slate-11">Roadmap</a>
            <a href="#gallery" className="block px-3 py-2 text-base font-medium text-slate-11">Gallery</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-11">Pricing</a>
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center px-3 py-2 text-base font-medium text-slate-12">Login</button>
              <button className="w-full bg-slate-12 text-slate-1 px-5 py-3 rounded-xl text-base font-semibold">Get started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
