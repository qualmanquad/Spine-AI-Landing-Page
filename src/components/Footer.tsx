export default function Footer() {
  return (
    <footer className="bg-slate-1 border-t border-slate-6 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-azure to-accent-purple bg-clip-text text-transparent block mb-4">
              Spine
            </span>
            <p className="text-slate-8 text-sm">
              The infinite workspace for modern marketers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-12 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-11">
              <li><a href="#" className="hover:text-accent-purple">Manifesto</a></li>
              <li><a href="#" className="hover:text-accent-purple">Community</a></li>
              <li><a href="#" className="hover:text-accent-purple">Roadmap</a></li>
              <li><a href="#" className="hover:text-accent-purple">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-12 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-11">
              <li><a href="#" className="hover:text-accent-purple">Gallery</a></li>
              <li><a href="#" className="hover:text-accent-purple">Help Center</a></li>
              <li><a href="#" className="hover:text-accent-purple">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-12 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-11">
              <li><a href="#" className="hover:text-accent-purple">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-purple">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-8">© 2025 Spine AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social icons placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}


