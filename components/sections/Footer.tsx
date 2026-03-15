export default function Footer() {
  return (
    <footer className="w-full bg-[#3E3A35] text-white py-20 lg:py-24 font-sans">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-x-16 mb-24">
          
          <div className="col-span-1">
            <h4 className="text-white text-[9px] empty:lg:text-[10px] font-bold uppercase tracking-[0.25em] mb-10">Help</h4>
            <ul className="space-y-4 text-[14px] text-white/70 leading-[1.8]">
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white text-[9px] empty:lg:text-[10px] font-bold uppercase tracking-[0.25em] mb-10">Explore</h4>
            <ul className="space-y-4 text-[14px] text-white/70 leading-[1.8]">
              <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ateliers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethos</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white text-[9px] empty:lg:text-[10px] font-bold uppercase tracking-[0.25em] mb-10">Connect</h4>
            <ul className="space-y-4 text-[14px] text-white/70 leading-[1.8]">
              <li><a href="#" className="hover:text-white transition-colors">Trade Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hospitality</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-span-2">
            <h4 className="text-white text-[9px] empty:lg:text-[10px] font-bold uppercase tracking-[0.25em] mb-10">Join the Circle</h4>
            <p className="mb-8 text-white/60 max-w-[340px] leading-[1.6] text-[14px]">
              Quiet inspiration and collection updates delivered sparingly to your inbox.
            </p>
            <form className="flex border-b border-white/20 pb-4 group">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-transparent outline-none flex-1 text-white placeholder:text-white/30 text-[14px]"
                required
              />
              <button type="submit" className="text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:text-[#B8733E] transition-colors ml-4 pl-4 whitespace-nowrap">
                Submit
              </button>
            </form>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between md:items-center pt-10 border-t border-white/10 text-[9px] tracking-[0.2em] text-white/40 uppercase">
          <p className="mb-6 md:mb-0">© 2024 TERRA DESIGNS — ORGANIC BY NATURE</p>
          <div className="flex flex-wrap gap-8 text-[9px]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
