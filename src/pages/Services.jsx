import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <header className="pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
            Layanan Unggulan Kami
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Solusi Digital <span className="text-blue-600">Tanpa Kompromi.</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan layanan pengembangan web end-to-end yang dirancang untuk performa, keamanan, dan skala
            bisnis global.
          </p>
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500">
              <div className="mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Membangun ekosistem web yang scalable menggunakan teknologi terbaru seperti React, Laravel, dan Node.js.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Arsitektur SPA/SSR
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> API Integration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Database Management
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500">
              <div className="mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Desain antarmuka yang intuitif dan berpusat pada pengguna untuk meningkatkan engagement dan retensi.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> User Research
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> High-Fidelity Prototyping
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Design Systems
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500">
              <div className="mb-8 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maintenance</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Dukungan teknis berkelanjutan untuk memastikan produk Anda tetap aman, cepat, dan selalu up-to-date.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Security Audits
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Performance Tuning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> 24/7 Priority Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Pilih Paket Anda</h2>
            <p className="text-gray-500">Opsi fleksibel untuk berbagai skala kebutuhan bisnis.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Starter</h4>
              <h3 className="text-3xl font-extrabold mb-2 text-brandBlack">Paket Landing</h3>
              <p className="text-2xl font-bold text-brandBlack mb-4">Mulai Rp 349rb - 849rb</p>
              {/* Catatan kecil mengenai domain */}
              <p className="text-[12px] text-gray-400 mb-4 italic leading-tight">
                *Harga 349rb khusus domain .my.id + hosting 1 bulan.
              </p>
              <p className="text-gray-500 mb-8 text-sm">Ideal untuk profil pribadi atau landing page produk tunggal.</p>

              <ul className="space-y-4 mb-10 flex-grow text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1 Halaman Utama (Landing Page)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Gratis Hosting & Domain (.com) 1 Tahun
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Desain Responsif (Mobile Friendly)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Sertifikat SSL Gratis
                </li>
              </ul>

              <Link
                target="_blank"
                to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Paket%20Landing%20Anda."
                className="block text-center py-4 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                Pilih Paket
              </Link>
            </div>

            <div className="bg-brandBlack p-8 rounded-3xl shadow-2xl text-white transform lg:scale-105 z-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                Paling Populer
              </div>
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Premium</h4>
              <h3 className="text-3xl font-extrabold mb-2">Paket Bisnis</h3>
              <p className="text-2xl font-bold text-white mb-6">Mulai Rp 1,2jt</p>
              <p className="text-gray-400 mb-8 text-sm">Solusi lengkap untuk perusahaan profesional dan UMKM.</p>

              <ul className="space-y-4 mb-10 flex-grow text-sm text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hingga 5 Halaman
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Penyimpanan SSD NVMe Ultra-Cepat
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Backup Harian & Restore Mudah
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimasi SEO On-Page
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Email Bisnis Kustom
                </li>
              </ul>

              <Link
                href="contact.html"target="_blank"
                to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Paket%20Bisnis%20Anda."
                className="block text-center py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
              >
                Mulai Proyek
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Custom</h4>
              <h3 className="text-3xl font-extrabold mb-2 text-brandBlack">Paket Enterprise</h3>
              <p className="text-2xl font-bold text-brandBlack mb-6">Mulai Rp 2,5jt</p>
              <p className="text-gray-500 mb-8 text-sm">Sistem web kompleks yang dibangun dari nol sesuai kebutuhan.</p>

              <ul className="space-y-4 mb-10 flex-grow text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Fitur Kustom Sesuai Request
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced Security & Database
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Integrasi Payment Gateway
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dukungan Prioritas 24/7
                </li>
              </ul>

              <Link
                target="_blank"
                to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20Paket%20Enterprise%20Anda."
                className="block text-center py-4 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
