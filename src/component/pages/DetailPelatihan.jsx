import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../Elements/Head/Heading";
import Paragraph from "../Elements/Paragraph/ParagraphText";
import Button from "../Elements/Button";
import ImgCard from "../../assets/imgcard1.jpg";

const DetailPelatihan = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // tambahkan useNavigate

  const handleDaftar = () => {
    navigate("/daftar"); // arahkan ke halaman /daftar
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 space-y-8">
      {/* Hero Section */}
      <div
        className="h-36 md:h-30 rounded-lg flex items-center justify-center bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${ImgCard})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(8, 136, 241, 0.5)",
          filter: "blur(1px)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 backdrop-blur-sm rounded-lg"></div>
        <h1 className="relative text-white text-3xl md:text-4xl font-bold z-10 text-center">
          {id}
        </h1>
      </div>

      {/* Gambar */}
      <div className="w-full flex justify-center">
        <img
          src={ImgCard}
          alt="Pelatihan"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <Heading>Deskripsi Lengkap</Heading>
        <Paragraph>
          Ini adalah deskripsi lengkap mengenai pelatihan {id}. Di sini kamu
          bisa mempelajari berbagai materi bermanfaat, mengikuti pelatihan
          secara interaktif, dan mendapatkan sertifikat setelah menyelesaikan
          modul.
        </Paragraph>
      </div>

      {/* Tombol */}
      <div className="mt-8 flex justify-center">
        <Button onClick={handleDaftar}>
          Daftar Sekarang
        </Button>
      </div>
    </div>
  );
};

export default DetailPelatihan;
