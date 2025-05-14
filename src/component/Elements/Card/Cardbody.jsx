import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../Head/Heading";
import Paragraph from "../Paragraph/ParagraphText";
import Button from "../Button/index";

const CardBody = ({ title, description, image, fullDescription }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pelatihan/${encodeURIComponent(title)}`, {
      state: {
        image,
        fullDescription,
        title,
      },
    });
  };

  return (
    <div className="p-4">
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button
        onClick={handleClick}
        style={{ width: "260px", height: "40px" }}
      >
        Ikut Pelatihan
      </Button>
    </div>
  );
};

export default CardBody;
