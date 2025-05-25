import React from "react";
import CardPelatihan from "../Fragments/CardPelatihan";
import CarouselComponent from "../Elements/Slideimg/Carouselcomponent";
import CardBerita from "../Fragments/CardBerita";
import TestimoniCarousel from "../Fragments/TestimoniCarousel";

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Safe zone wrapper */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6">

        {/* Carousel Atas */}
        <div className="py-4">
          <CarouselComponent />
        </div>

        {/* Pelatihan */}
        <section className="py-4">
          <div className="bg-gray-100 rounded-xl shadow-md p-6">
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

        {/* === SECTION: BERITA === */}
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Berita Terbaru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <CardBerita
                key={i}
                image={`https://via.placeholder.com/300x180?text=Berita+${i + 1}`}
                title={`Berita ${i + 1}`}
                date="Mei 2025"
                summary="Ringkasan berita atau update singkat terkait kegiatan atau info terbaru."
                link={`/berita/${i + 1}`} // Misalnya route berita detail
              />
            ))}
          </div>
        </section>

        {/* === SECTION: TESTIMONI === */}
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Apa Kata Peserta?</h2>
          <TestimoniCarousel />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
