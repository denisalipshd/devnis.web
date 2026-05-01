import { useState } from "react";
import { projects, categories } from "../data/data";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = (
    selectedCategory === "all" 
      ? [...projects] 
      : projects.filter((p) => p.category === selectedCategory)
  )
  .sort((a, b) => b.id - a.id);

  return (
    <div>
      <header className="pt-48 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Karya Pilihan <span className="text-blue-600">Kami.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-8 mx-auto leading-relaxed">
            Eksplorasi proyek-proyek digital yang telah kami kerjakan untuk berbagai industri, mulai dari e-commerce
            hingga platform enterprise.
          </p>
        </div>
      </header>

      <section className="pt-4 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4" id="filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn px-8 py-2.5 rounded-full border hover:border-blue-600 hover:text-blue-600 text-sm font-bold transition-all duration-300 focus:outline-none ${selectedCategory === cat.id ? "border-blue-600 text-blue-600" : "border-gray-200 text-gray-500"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="portfolio-item group relative bg-gray-100 rounded-3xl overflow-hidden aspect-[16/10] cursor-pointer border border-gray-100"
                  data-category={project.category}
                >
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                    <img src={project.preview} alt={project.title} />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 text-white translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold mb-4">{project.title}</h3>
                    <p className="text-sm opacity-90 max-w-sm mb-6">{project.desc}</p>
                    <a
                      href="#"
                      className="w-fit px-6 py-2 border border-white rounded-full text-xs font-bold hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Lihat Detail
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <span className="col-span-1 md:col-span-3 text-center text-gray-500">
                Tidak ada proyek yang sesuai dengan filter yang dipilih.
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
