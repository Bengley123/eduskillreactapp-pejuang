import React from "react";
//import CarouselComponent from "../Carouselcomponent";
//import CardPelatihan from "../Cardpelatihan";
import CardPelatihan from "../Fragments/CardPelatihan";
import CarouselComponent from "../Elements/Slideimg/Carouselcomponent";
//import SectionWrapper from "../Sectionwrapper";
// import FooterComponent from "../Footercomponent";

const LandingPage = () => {
  return (
    <div className="bg-white">

      {/* Safe zone wrapper */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6">

        {/* Carousel Atas */}
        <div className="py-4">
          <CarouselComponent />
        </div>

        {/* Card Pelatihan dibungkus card */}
        <section className="py-4">
          <div className="bg-gray-100 rounded-xl shadow-md p-6">
            {/* <h2 className="text-2xl font-bold text-center mb-6">Pelatihan Populer</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <CardPelatihan
                  key={index}
                  image={`https://via.placeholder.com/300x200?text=Pelatihan+${index + 1}`}
                  title={`Pelatihan ${index + 1}`}
                  description="Deskripsi singkat pelatihan untuk meningkatkan skill dan pengetahuan Anda."
                />
              ))}
            </div>
          </div>
        </section>

        {/* Carousel Bawah */}
        <div className="py-4">
          <CarouselComponent />
        </div>

        {/* Footer */}
        {/* <FooterComponent /> */}
      </div>
    </div>
  );
};

export default LandingPage;
