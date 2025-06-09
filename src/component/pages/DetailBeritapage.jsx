import React from "react";
import { useParams } from "react-router-dom";

const dummyBerita = [
  {
    id: "1",
    title: "Berita 1",
    date: "Mei 2025",
    image: "https://via.placeholder.com/800x400?text=Berita+1",
    content: `Isi lengkap dari Berita 1. Di sini bisa memuat paragraf panjang mengenai kegiatan, informasi penting, dokumentasi acara, dan lain-lain.`,
  },
  {
    id: "2",
    title: "Berita 2",
    date: "Mei 2025",
    image: "https://via.placeholder.com/800x400?text=Berita+2",
    content: `Isi lengkap dari Berita 2. Di sini bisa memuat informasi terperinci mengenai pelatihan, testimonial, dan pencapaian peserta.`,
  },
  {
    id: "3",
    title: "Berita 3",
    date: "Mei 2025",
    image: "https://via.placeholder.com/800x400?text=Berita+3",
    content: `Isi lengkap dari Berita 3. Bisa juga ditambahkan gambar kegiatan, kutipan dari narasumber, dan rencana kegiatan selanjutnya.`,
  },
];

const BeritaDetail = () => {
  const { id } = useParams();
  const berita = dummyBerita.find((item) => item.id === id);

  if (!berita) {
    return <div className="text-center text-red-500 py-10">Berita tidak ditemukan</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img
        src={berita.image}
        alt={berita.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <p className="text-sm text-gray-500">{berita.date}</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{berita.title}</h1>
      <p className="text-gray-700 leading-relaxed">{berita.content}</p>
    </div>
  );
};

export default BeritaDetail;
