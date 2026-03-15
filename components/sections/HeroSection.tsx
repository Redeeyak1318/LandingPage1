export default function HeroSection() {
  return (
    <section className="container pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        <div className="lg:col-span-5 flex flex-col items-start w-full pr-4 lg:pr-0">
          <div className="text-[10px] font-bold tracking-[0.25em] text-[#7A9B85] uppercase mb-8">
            Spring / Summer 2024
          </div>
          <h1 className="text-[52px] lg:text-[72px] leading-[1.05] font-serif text-[#3E3A35] mb-8 tracking-tight">
            Honest <br className="hidden md:block" />
            Materials, <br className="hidden md:block" />
            <em className="text-[#B8733E] font-normal italic pr-1">Timeless</em> <br className="hidden md:block" />
            Design
          </h1>
          <p className="text-[15px] lg:text-[16px] text-[#3E3A35]/80 font-sans leading-[1.7] mb-12 max-w-[420px]">
            Elevated home essentials crafted from clay, solid oak, and recycled linen. Designed to age with grace and bring nature indoors.
          </p>
          <button className="bg-[#3E3A35] text-white px-10 py-[18px] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transform hover:-translate-y-1 transition-transform duration-300">
            Explore the Series
          </button>
        </div>
        <div className="lg:col-span-7 w-full h-full relative group overflow-hidden rounded-[20px]">
          <img 
            src="/assets/hero.jpg" 
            alt="Interior showcasing earthy furniture" 
            className="w-full aspect-[4/5] object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}
