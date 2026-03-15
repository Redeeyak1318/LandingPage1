export default function CapturedCalmGallery() {
  return (
    <section className="container py-20 lg:py-32">
      <div className="text-center flex flex-col items-center mb-16 lg:mb-20 px-4">
        <h2 className="text-[48px] lg:text-[72px] leading-[1.05] font-serif text-[#3E3A35] mb-6">Captured Calm</h2>
        <p className="text-[16px] leading-[1.6] text-[#3E3A35]/80 max-w-[340px] md:max-w-[420px] font-sans">
          Living well is an art. Explore how our community styles their sanctuary.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[800px]">
        {/* Left Column - Large Portrait */}
        <div className="w-full lg:w-1/2 h-[500px] lg:h-full rounded-[20px] overflow-hidden group flex-shrink-0 bg-[#E8DFD5]/50">
          <img 
            src="/assets/gallery-1.jpg" 
            alt="Community styling 1" 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          />
        </div>
        
        {/* Right Column - Stacked grid */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 lg:h-full">
          {/* Top Row - Two Squares */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[250px] sm:h-[400px] lg:h-[calc(50%-12px)]">
            <div className="h-full rounded-[20px] overflow-hidden group bg-[#E8DFD5]/50">
              <img 
                src="/assets/gallery-2.jpg" 
                alt="Community styling 2" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
              />
            </div>
            <div className="h-full rounded-[20px] overflow-hidden group bg-[#E8DFD5]/50">
              <img 
                src="/assets/gallery-3.jpg" 
                alt="Community styling 3" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
              />
            </div>
          </div>
          
          {/* Bottom Row - One Wide Landscape */}
          <div className="h-[250px] sm:h-[400px] lg:h-[calc(50%-12px)] rounded-[20px] overflow-hidden group bg-[#E8DFD5]/50">
            <img 
              src="/assets/gallery-4.jpg" 
              alt="Community styling 4" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
