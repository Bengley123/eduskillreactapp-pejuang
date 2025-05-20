import React from "react";
import CardImage from "../Elements/Card/CardImage";
import CardBody from "../Elements/Card/Cardbody";
import Imgcard from "../../assets/imgcard.jpg";

const CardPelatihan = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardImage src={Imgcard} alt={title} />
      <CardBody
        title={title}
        description={description}
        image={Imgcard}
        fullDescription={`Ini adalah deskripsi lengkap untuk ${title}. Pelatihan ini memberikan materi komprehensif, latihan praktik, dan sertifikat setelah selesai.`}
      />
    </div>
  );
};

export default CardPelatihan;
