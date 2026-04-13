const About = () => {
  return (
    <div>
      <header className="pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
            Tentang Devnis
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Agensi bagi mereka yang <br />
            <span className="text-blue-600">ingin melampaui batas.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-8 mx-auto leading-relaxed">
            Didirikan pada tahun 2024, Devnis lahir dari kegelisahan akan dunia digital yang penuh dengan template
            standar. Kami menciptakan pengalaman digital kustom untuk brand yang ingin memimpin, bukan sekadar mengikuti
            tren.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Visi Kami</h3>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight">Menaikkan standar web modern di Indonesia.</h2>
            <p className="text-gray-500 leading-relaxed">
              Kami memimpikan dunia digital di mana performa dan estetika berjalan beriringan tanpa kompromi. Fokus kami
              adalah menciptakan interaksi yang bermakna bagi pengguna melalui produk digital yang indah dan cepat.
            </p>
          </div>
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Misi Kami</h3>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight">Memberdayakan brand dengan teknologi presisi.</h2>
            <p className="text-gray-500 leading-relaxed">
              Misi kami adalah menyediakan infrastruktur teknis yang dibutuhkan perusahaan untuk berkembang. Kami tidak
              hanya menulis kode; kami merancang solusi yang mendorong pendapatan dan loyalitas pelanggan Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Mengapa Devnis?</h2>
            <p className="text-gray-500">Nilai lebih yang kami bawa untuk bisnis Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Performa Tinggi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kami mengoptimalkan setiap baris kode untuk memastikan situs Anda dimuat secara instan, meningkatkan SEO
                dan konversi.
              </p>
            </div>

            <div className="p-10 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Keamanan Berlapis</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kami menerapkan protokol keamanan tingkat tinggi untuk melindungi data bisnis dan privasi pelanggan Anda
                dari ancaman digital.
              </p>
            </div>

            <div className="p-10 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Desain Modular</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sistem desain kami dibangun untuk tumbuh. Tambahkan fitur atau halaman baru kapan saja tanpa merusak
                konsistensi brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
