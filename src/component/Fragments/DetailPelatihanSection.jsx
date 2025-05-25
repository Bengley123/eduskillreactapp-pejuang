// src/components/Organisms/DetailPelatihanSection.jsx
import React from "react";
import HeroBanner from "../Moleculs/HeroBanner";
import Image from "../Elements/Image/ImageIndex";
import DeskripsiSection from "../Moleculs/DeskripsiSection";
import Button from "../Elements/Button/index";

const DetailPelatihanSection = ({ id, imageSrc, onDaftar }) => {
  return (
    <div className="max-w-5xl mx-auto my-10 px-4 space-y-8">
      <HeroBanner title={id} backgroundImage={imageSrc} />

      <div className="w-full flex justify-center">
        <Image
          src={imageSrc}
          alt="Pelatihan"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      <DeskripsiSection
        title="Deskripsi Lengkap"
        content={`Ini adalah deskripsi lengkap mengenai pelatihan ${id}. Di sini kamu bisa mempelajari berbagai materi bermanfaat, mengikuti pelatihan secara interaktif, dan mendapatkan sertifikat setelah menyelesaikan modul.`}
      />

      <div className="mt-8 flex justify-center">
        <Button onClick={onDaftar}>Daftar Sekarang</Button>
      </div>
    </div>
  );
};

export default DetailPelatihanSection;
