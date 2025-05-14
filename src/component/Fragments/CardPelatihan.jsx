import React from "react";
//import { useNavigate } from "react-router-dom";
import Imgcard from "../../assets/imgcard.jpg";
import CardImage from "../Elements/Card/CardImage";
import CardBody from "../Elements/Card/Cardbody";

const CardPelatihan = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardImage src={Imgcard} alt={title} />
      <CardBody title={title} description={description} />
    </div>
  );
};

export default CardPelatihan;
