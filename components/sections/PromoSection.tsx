export default function PromoSection() {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[#2A2825]">
      {/* Background Image / Dark area */}
      <div className="absolute inset-0">
        <img
          src="/assets/promo.jpg"
          alt="Promo background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Overlay text simulating the "Image" watermark in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] md:text-[18rem] font-bold text-white/[0.03] leading-none tracking-tighter">
          Image
        </span>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        <h2 className="text-[56px] lg:text-[80px] font-serif text-white mb-10 lg:mb-12 leading-[1.05] tracking-tight">
          Where Softness <br className="hidden md:block" /> Meets Structure
        </h2>
        <button className="bg-[#FFF8F3] text-[#3E3A35] px-12 py-[20px] rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transform transition-transform duration-300 hover:-translate-y-1 shadow-lg">
          The Arch Collection
        </button>
      </div>
    </section>
  );
}
