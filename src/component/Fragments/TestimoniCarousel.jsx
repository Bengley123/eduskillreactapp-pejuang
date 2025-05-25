// src/Fragments/TestimoniCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimoniCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const data = [
    {
      name: "Ucup Kopling",
      role: "Yonsei garment.co, Japan",
      testimony:
        "Sebagai alumni BINA ESSA, saya sangat bangga, terimakasih para tenaga pengajar...",
      photo: "https://via.placeholder.com/50x50.png?text=U", // Ganti dengan foto asli
    },
    {
      name: "Santi Widya",
      role: "Korsel Fashion Ltd",
      testimony:
        "BINA ESSA membekali saya dengan skill jahit industri dan juga soft skill!",
      photo: "https://via.placeholder.com/50x50.png?text=S",
    },
  ];

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
          <p className="text-gray-800 font-medium mb-4">{item.testimony}</p>
          <div className="flex flex-col items-center">
            <img
              src={item.photo}
              alt={item.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-600">{item.role}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimoniCarousel;