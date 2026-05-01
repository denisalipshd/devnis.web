import { Link } from "react-router-dom";
import { useState } from "react";
import { projects, categories, faqs } from "../data/data";
import keunggulanKami from "../assets/img/keunggulan-kami.png";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = (
    selectedCategory === "all" 
      ? [...projects] 
      : projects.filter((p) => p.category === selectedCategory)
  )
  .sort((a, b) => b.id - a.id)
  .slice(0, 6);

  const handleFAQToggle = (index) => {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item, i) => {
      if (i === index) {
        item.querySelector(".faq-answer").classList.toggle("hidden");
      } else {
        item.querySelector(".faq-answer").classList.add("hidden");
      }
    });
  };

  return (
    <div>
      <header className="relative pt-40 pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
            Solusi Web Generasi Baru
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Kami membangun <br />
            <span className="text-blue-600">karya digital.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Devnis adalah agensi butik yang berfokus pada pembuatan aplikasi web berperforma tinggi yang menjembatani
            celah antara desain artistik dan fungsionalitas teknis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-10 py-4 bg-brandBlack text-white rounded-lg font-bold hover:scale-105 transition-all duration-300"
            >
              Lihat Portofolio
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-10 py-4 border border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 text-brandBlack"
            >
              Layanan Kami
            </Link>
          </div>
        </div>
      </header>

      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            Dipercaya oleh pemimpin industri
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale group">
            <span className="text-2xl font-black group-hover:grayscale-0 transition-all">TECHFLOW</span>
            <span className="text-2xl font-black group-hover:grayscale-0 transition-all">LUMINA</span>
            <span className="text-2xl font-black group-hover:grayscale-0 transition-all">NEXUS</span>
            <span className="text-2xl font-black group-hover:grayscale-0 transition-all">VORTEX</span>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Keunggulan Kami</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
                Bukan sekadar website, tapi <span className="text-gray-400">aset pertumbuhan.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Kami menggabungkan estetika desain dengan performa teknis untuk memastikan bisnis Anda tampil menonjol
                di pasar digital yang kompetitif.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Performa Ultra Cepat</h4>
                    <p className="text-gray-500 text-sm">
                      Website yang loading di bawah 2 detik untuk pengalaman pengguna yang maksimal.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">SEO & Mobile Friendly</h4>
                    <p className="text-gray-500 text-sm">
                      Struktur kode yang ramah mesin pencari dan tampilan sempurna di semua perangkat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-[3rem] aspect-square flex items-center justify-center text-gray-300 font-bold italic border border-gray-100 shadow-inner">
              <img src={keunggulanKami} alt="" className="w-full h-full object-cover rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-brandBlack">Karya Terbaru</h2>
              <p className="text-gray-500">Sekilas tentang proyek digital terbaru yang kami kerjakan.</p>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:block text-blue-600 font-bold hover:translate-x-2 transition-transform"
            >
              Lihat Semua Proyek &rarr;
            </Link>
          </div>

          <div className="pt-4 pb-12 px-6">
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
          </div>

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

      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4">Bagaimana Kami Bekerja</h2>
            <p className="text-gray-500">Proses sederhana untuk hasil yang luar biasa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <span className="text-6xl font-black text-blue-100 absolute top-4 right-6">01</span>
              <h3 className="text-xl font-bold mb-4 relative z-10">Strategi & Konsultasi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kami mendalami bisnis Anda untuk memahami target audiens dan tujuan utama website Anda.
              </p>
            </div>

            <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <span className="text-6xl font-black text-blue-100 absolute top-4 right-6">02</span>
              <h3 className="text-xl font-bold mb-4 relative z-10">Desain & Development</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Membangun antarmuka yang memukau dengan kode yang bersih, cepat, dan responsif di semua perangkat.
              </p>
            </div>

            <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <span className="text-6xl font-black text-blue-100 absolute top-4 right-6">03</span>
              <h3 className="text-xl font-bold mb-4 relative z-10">Peluncuran & Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Setelah testing ketat, website Anda mengudara. Kami tetap di sini untuk dukungan teknis jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-500">Semua yang perlu Anda ketahui tentang layanan premium kami.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div className="faq-item border border-gray-200 rounded-2xl bg-white overflow-hidden">
                <button
                key={faq.id}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors font-bold focus:outline-none"
                  onClick={() => handleFAQToggle(index)}
                >
                  {faq.question}
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="faq-answer hidden p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center bg-blue-600 rounded-[3rem] py-20 px-10 relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Siap membuat brand Anda <br className="hidden md:block" />
              naik level?
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto opacity-90">
              Konsultasikan kebutuhan digital Anda hari ini secara gratis dan dapatkan penawaran spesial.
            </p>
            <Link
              target="_blank"
              to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda."
              className="inline-block px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Mulai Diskusi Sekarang
            </Link>
          </div>
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
