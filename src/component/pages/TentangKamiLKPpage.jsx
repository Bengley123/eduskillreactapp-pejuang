import TentangKamiContent from "../Fragments/TentangKamiContent";
import logo from "../../assets/logo-tentang-kami.png";

export default function TentangkamiLKPPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-16 px-4">
      <TentangKamiContent
        title="Lembaga Kursus dan Pelatihan Bina ESSA"
        image={logo}
        alt="Logo LKP Bina ESSA"
        description={
          <>
            <span className="font-bold">LKP Bina ESSA</span> berkomitmen mendukung peningkatan kualitas SDM melalui pelatihan yang terstandarisasi dan inovatif.
            Dengan visi menjadi pelopor pelatihan kerja di Bandung, kami percaya bahwa pendidikan vokasi adalah kunci menuju masa depan yang lebih baik dan mandiri.
            Kami hadir untuk masyarakat yang ingin siap kerja, siap usaha, dan siap berkontribusi untuk bangsa.
          </>
        }
      />
    </div>
  );
}
