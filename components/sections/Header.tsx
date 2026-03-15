export default function Header() {
  return (
    <header className="w-full h-[72px] bg-[#FFF8F3] sticky top-0 z-50 border-b border-[#E8DFD5]">
      <div className="container h-full flex items-center justify-between">
        <div className="text-[28px] font-serif text-[#3E3A35] tracking-wide mt-1">
          TERRA
        </div>
        <nav className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E3A35] mt-1">
          <a href="#" className="hover:text-[#B8733E] transition-colors">Rooms</a>
          <a href="#" className="hover:text-[#B8733E] transition-colors">Shop</a>
          <a href="#" className="hover:text-[#B8733E] transition-colors">Outdoor</a>
          <a href="#" className="hover:text-[#B8733E] transition-colors">Objects</a>
          <a href="#" className="hover:text-[#B8733E] transition-colors">Journal</a>
        </nav>
        <div className="flex items-center gap-8 text-[#3E3A35]">
          <button aria-label="Search" className="hover:text-[#B8733E] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </button>
          <button className="flex items-center gap-[6px] hover:text-[#B8733E] transition-colors font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
