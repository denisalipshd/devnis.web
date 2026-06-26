export const navLinks = [
  { id: "home", name: "Beranda", url: "/" },
  { id: "about", name: "Tentang Kami", url: "/about" },
  { id: "services", name: "Layanan", url: "/services" },
  { id: "portfolio", name: "Portofolio", url: "/portfolio" },
];

export const categories = [
  { id: "all", name: "Semua" },
  { id: "e-commerce", name: "E-Commerce" },
  { id: "landing-page", name: "Landing Page" },
  { id: "company-profile", name: "Company Profile" },
];

import imgLaundry from "../assets/img/fresh-clean.png";
import imgLumina from "../assets/img/lumina-dining.png";
import imgDelizia from "../assets/img/delizia-catering.png";
import imgKimoci from "../assets/img/kimocinet.png";
import imgJMTravel from "../assets/img/jm-travel.png";
import imgAC from "../assets/img/breeze-ac.png";
import imgCCTV from "../assets/img/securevision.png";

export const projects = [
  {
    id: 1,
    title: "Lumina Dining",
    category: "e-commerce",
    desc: "Sistem reservasi dan pemesanan restoran terintegrasi langsung ke WhatsApp.",
    preview: imgLumina,
    link: "https://lumina-dining.vercel.app/",
  },
  {
    id: 2,
    title: "BREEZE AC",
    category: "landing-page",
    desc: "Landing page layanan AC yang menyediakan informasi produk dan fitur pemesanan.",
    preview: imgAC,
    link: "https://devnis-web.github.io/breeze",
  },
  {
    id: 3,
    title: "SECUREVISION",
    category: "landing-page",
    desc: "Landing page layanan keamanan/CCTV dengan fitur informasi produk dan order.",
    preview: imgCCTV,
    link: "https://devnis-web.github.io/securevision",
  },
  {
    id: 4,
    title: "FRESH CLEAN",
    category: "landing-page",
    desc: "Landing page laundry dengan fitur order jasa antar-jemput via WhatsApp.",
    preview: imgLaundry,
    link: "https://devnis-web.github.io/fresh-clean",
  },
  {
    id: 5,
    title: "Delizia Catering",
    category: "company-profile",
    desc: "Website katering dengan katalog menu lengkap dan pemesanan langsung via WhatsApp.",
    preview: imgDelizia,
    link: "https://devnis-web.github.io/delizia/",
  },
  {
    id: 6,
    title: "Kimoci Network",
    category: "company-profile",
    desc: "Company profile perusahaan IT yang menampilkan portofolio dan kontak WhatsApp.",
    preview: imgKimoci,
    link: "https://denisalipshd.github.io/kimoci-net/",
  },
  {
    id: 7,
    title: "JM Travel",
    category: "company-profile",
    desc: "Company profile agen travel dengan informasi destinasi dan booking via WhatsApp.",
    preview: imgJMTravel,
    link: "https://devnis-web.github.io/jm-travel/",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Apa itu layanan yang Anda tawarkan?",
    answer:
      "Kami menawarkan berbagai layanan digital seperti desain web, pengembangan aplikasi, dan strategi pemasaran online.",
  },
  {
    id: 2,
    question: "Berapa lama waktu pengembangan proyek?",
    answer:
      "Waktu pengembangan proyek tergantung pada kompleksitas dan ukuran proyek. Kami akan memberikan estimasi yang akurat setelah melakukan analisis awal.",
  },
  {
    id: 3,
    question: "Bagaimana sistem pembayaran untuk pengerjaan proyek?",
    answer:
      "Sistem pembayaran biasanya dibagi menjadi beberapa tahap, dimulai dengan Down Payment (DP) di awal, dan pelunasan setelah proyek selesai atau sesuai kesepakatan kontrak.",
  },
  {
    id: 4,
    question: "Apakah saya bisa melakukan revisi selama proses pembuatan?",
    answer:
      "Ya, kami menyediakan kuota revisi sesuai dengan paket layanan yang dipilih untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.",
  },
  {
    id: 5,
    question: "Apakah website yang dibuat sudah mobile-friendly?",
    answer:
      "Tentu saja. Semua website dan aplikasi yang kami kembangkan dirancang dengan desain responsif agar tampil optimal di smartphone, tablet, maupun desktop.",
  },
  {
    id: 6,
    question: "Apakah ada dukungan (maintenance) setelah proyek selesai?",
    answer:
      "Kami menyediakan layanan dukungan teknis dan pemeliharaan berkala setelah proyek selesai untuk memastikan website atau aplikasi Anda tetap berjalan dengan baik.",
  },
];
