// src/pages/DetailPelatihan.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetailPelatihanSection from "../Fragments/DetailPelatihanSection";
import ImgCard from "../../assets/imgcard1.jpg";

const DetailPelatihan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDaftar = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      navigate("/daftar");
    } else {
      alert("Silakan login terlebih dahulu!");
    }
  };

  return (
    <DetailPelatihanSection id={id} imageSrc={ImgCard} onDaftar={handleDaftar} />
  );
};

export default DetailPelatihan;
