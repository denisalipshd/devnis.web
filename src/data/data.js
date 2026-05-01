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

import imgLaundry from "../assets/img/1.png";
import imgCoffee from "../assets/img/2.png";
import imgFoodie from "../assets/img/3.png";
import imgLumina from "../assets/img/4.png";
import imgDelizia from "../assets/img/5.png";
import imgKimoci from "../assets/img/6.png";
import imgJMTravel from "../assets/img/7.png";

export const projects = [
  {
    id: 1,
    title: "Laundry Monster",
    category: "landing-page",
    desc: "Landing page layanan laundry dengan fitur integrasi WhatsApp Order untuk pemesanan jasa antar-jemput.",
    preview: imgLaundry,
  },
  {
    id: 2,
    title: "Coffee Shop",
    category: "landing-page",
    desc: "Website katalog kopi dengan fokus pada visual estetik dan manajemen menu.",
    preview: imgCoffee,
  },
  {
    id: 3,
    title: "Foodie",
    category: "landing-page",
    desc: "Website landing page yang menjual makanan sehat khusus diet.",
    preview: imgFoodie,
  },
  {
    id: 4,
    title: "Lumina Dining",
    category: "e-commerce",
    desc: "Sistem reservasi dan pemesanan restoran yang terhubung langsung ke WhatsApp admin.",
    preview: imgLumina,
  },
  {
    id: 5,
    title: "Delizia Catering",
    category: "company-profile",
    desc: "Website katering dengan katalog menu lengkap dan daftar paket, dilengkapi fitur pesan langsung via WhatsApp.",
    preview: imgDelizia,
  },
  {
    id: 6,
    title: "Kimoci Network",
    category: "company-profile",
    desc: "Website company profile untuk perusahaan IT dengan fokus pada layanan digital dan portofolio proyek, dilengkapi fitur kontak langsung via WhatsApp.",
    preview: imgKimoci,
  },
  {
    id: 7,
    title: "JM Travel",
    category: "company-profile",
    desc: "Website company profile untuk perusahaan travel dengan fokus pada layanan booking dan informasi destinasi, dilengkapi fitur kontak langsung via WhatsApp.",
    preview: imgJMTravel,
  }
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
];
