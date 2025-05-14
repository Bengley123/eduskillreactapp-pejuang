import React from "react";

import LogoBinaEssa from '../../../assets/logo-bina-essa1.jpg';

const SidebarAdmin = () =>{
    return(
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-60 bg-gray-800 text-white flex flex-col p-4 space-y-6">
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                    <img src={LogoBinaEssa} alt="Bina Essa Logo" className="w-10 h-10 rounded-full" />
                    <div className="text-black">
                        <div className="text-[9px] leading-tight font-bold text-white">LEMBAGA KURSUS DAN PELATIHAN</div>
                        <div className="text-lg font-bold -mt-1 text-white">BINA ESSA</div>
                    </div>
                </div>


                {/* Navigasi Vertikal */}
                <nav className="flex flex-col space-y-2">
                    <a href="/adpeserta" className="hover:bg-gray-700 px-2 py-2 rounded">Peserta</a>
                    <a href="/adpelatihan" className="hover:bg-gray-700 px-2 py-2 rounded">Pelatihan</a>
                    <a href="#" className="hover:bg-gray-700 px-2 py-2 rounded">Pendaftaran</a>
                    <a href="/adkonten" className="hover:bg-gray-700 px-2 py-2 rounded">Konten</a>
                    <a href="#" className="hover:bg-gray-700 px-2 py-2 rounded">Laporan</a>
                    <a href="#" className="hover:bg-gray-700 px-2 py-2 rounded">Admin</a>
                </nav>
            </aside>
        </div>
    );
}

export default SidebarAdmin;