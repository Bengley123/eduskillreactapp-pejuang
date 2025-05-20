import React from 'react';
import logo from "../../assets/logo-tentang-kami.png";

export default function TentangKamiPages() {
  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 px-6">LPK Bina ESSA</h1>
        
        <div className="flex flex-col items-center mb-2">
          <img src={logo} alt="Logo Bina Essa" className="w-80 h-80 object-contain mb-4" />
        </div>

        <div className="mb-6 px-8">
          <p className="font-semibold">Visi:</p>
          <p className="text-gray-600">
            Menjadi lembaga pelatihan kerja terdepan di Bandung yang menghasilkan tenaga kerja kompeten, profesional, dan berdaya saing tinggi di tingkat nasional.
          </p>
        </div>

        <div className="mb-6 px-8">
          <p className="font-semibold">Misi:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Menyelenggarakan pelatihan kerja berbasis kompetensi yang relevan dengan kebutuhan dunia industri dan usaha.</li>
            <li>Meningkatkan kualitas pengajar dan sarana pelatihan untuk mendukung proses pembelajaran yang efektif dan inovatif.</li>
            <li>Menjalin kemitraan strategis dengan berbagai pihak guna memperluas kesempatan kerja bagi lulusan.</li>
            <li>Membina peserta didik agar memiliki keterampilan teknis dan soft skills yang seimbang.</li>
            <li>Mendorong semangat wirausaha dan kemandirian ekonomi melalui program pelatihan kewirausahaan.</li>
          </ul>
        </div>

        <div className="text-gray-700 text-sm px-8">
          <p className="font-bold">
            <span className="font-bold">LKP Bina Essa Bandung</span> adalah lembaga pelatihan kerja yang berkomitmen mencetak sumber daya manusia unggul dan siap kerja melalui pendidikan vokasi berkualitas. 
            Dengan pengalaman dan dedikasi dalam dunia pelatihan keterampilan, LKP Bina Essa hadir sebagai mitra strategis dalam meningkatkan kompetensi masyarakat serta mendorong kemandirian ekonomi. 
            Berlandaskan semangat pembangunan SDM, keberadaan LKP Bina Essa terus dijaga dan dikembangkan untuk mendukung kemajuan bangsa.
          </p>
        </div>
      </div>
    </div>
  );
}
