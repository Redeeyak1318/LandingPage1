const categories = [
  { title: "Culinary", image: "/assets/cat-culinary.jpg" },
  { title: "Lounge", image: "/assets/cat-lounge.jpg" },
  { title: "Sanctuary", image: "/assets/cat-sanctuary.jpg" },
  { title: "Workspace", image: "/assets/cat-workspace.jpg" },
  { title: "Exterior", image: "/assets/cat-exterior.jpg" },
  { title: "Objects", image: "/assets/cat-objects.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="container py-20 lg:py-32">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-6">
        {categories.map((cat) => (
          <a key={cat.title} href="#" className="group flex flex-col items-center">
            <div className="w-full aspect-square rounded-[20px] overflow-hidden bg-[#E8DFD5]/50 flex items-center justify-center mb-6">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3E3A35] group-hover:text-[#B8733E] transition-colors">
              {cat.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
