import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-brandBlack text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-extrabold tracking-tighter mb-6 block">
              DEV<span className="text-blue-600">NIS</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 mx-auto md:mx-0">
              Mentransformasi masalah kompleks menjadi solusi digital yang elegan. Pengembangan web kelas atas untuk
              pertumbuhan Anda.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Peta Situs</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Ikuti Kami</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  target="_blank"
                  to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda."
                  className="hover:text-blue-600 transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.tiktok.com/@devnis.web" className="hover:text-blue-600 transition-colors">
                  Tiktok
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.instagram.com/devnis.web/" className="hover:text-blue-600 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.facebook.com/profile.php?id=61585763949987" className="hover:text-blue-600 transition-colors">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; 2026 Devnis Agency. Dibuat dengan presisi.</p>
          <div className="flex gap-6">
            <Link to="" className="hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link to="#" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
