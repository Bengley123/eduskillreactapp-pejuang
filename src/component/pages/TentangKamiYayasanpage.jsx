import TentangKamiContent from "../Fragments/TentangKamiContent";
import logo from "../../assets/logo-tentang-kami.png";

export default function TentangKamiLPKPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-16 px-4">
      <TentangKamiContent
        title="Yayasan Bina ESSA"
        image={logo}
        alt="Logo Bina Essa"
        description={
          <>
            <span className="font-bold">Yayasan Bina ESSA Bandung</span> adalah lembaga pelatihan kerja yang berkomitmen mencetak sumber daya manusia unggul dan siap kerja melalui pendidikan vokasi berkualitas. 
            Dengan pengalaman dan dedikasi dalam dunia pelatihan keterampilan, LKP Bina Essa hadir sebagai mitra strategis dalam meningkatkan kompetensi masyarakat serta mendorong kemandirian ekonomi. 
            Berlandaskan semangat pembangunan SDM, keberadaan LKP Bina Essa terus dijaga dan dikembangkan untuk mendukung kemajuan bangsa.
          </>
        }
      />
    </div>
  );
}
