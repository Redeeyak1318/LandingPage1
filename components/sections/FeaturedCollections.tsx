export default function FeaturedCollections() {
  return (
    <section className="container py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* The Clay Series */}
        <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden group">
          <img 
            src="/assets/collection-clay.jpg" 
            alt="The Clay Series" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 p-10 lg:p-12 text-white z-10 w-full flex flex-col items-start pointer-events-none">
            <h2 className="text-[48px] lg:text-[56px] leading-[1.05] font-serif mb-4">The Clay Series</h2>
            <p className="text-[#FFF8F3]/90 text-[15px] max-w-[320px] mb-10 leading-[1.6] font-sans">
              Hand-thrown ceramics with tactile glazes, inspired by the Mediterranean coast.
            </p>
            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] transform transition-transform duration-300 hover:-translate-y-1 pointer-events-auto border-b border-transparent hover:border-white pb-1">
              SHOP CERAMICS
            </a>
          </div>
        </div>

        {/* Native Woods */}
        <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden group">
          <img 
            src="/assets/collection-woods.jpg" 
            alt="Native Woods" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 p-10 lg:p-12 text-white z-10 w-full flex flex-col items-start pointer-events-none">
            <h2 className="text-[48px] lg:text-[56px] leading-[1.05] font-serif mb-4">Native Woods</h2>
            <p className="text-[#FFF8F3]/90 text-[15px] max-w-[320px] mb-10 leading-[1.6] font-sans">
              Solid walnut and oak pieces joined with traditional craftsmanship.
            </p>
            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] transform transition-transform duration-300 hover:-translate-y-1 pointer-events-auto border-b border-transparent hover:border-white pb-1">
              DISCOVER FURNITURE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
