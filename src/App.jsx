import React from "react";
import { Routes, Route } from "react-router-dom";

import UserLayout from "./component/Layouts/UserLayout";
import AdminLayout from "./component/Layouts/AdminLayout";

import LoginPage from "./component/pages/Loginpage";
import RegisterPage from "./component/pages/Registerpage";
import LandingPage from "./component/pages/Landingpage";
import DaftarPage from "./component/pages/Daftarpage";
import DetailPelatihan from "./component/pages/DetailPelatihan";
import AdminPesertaPage from "./component/pages/AdminPesertapage";
import AdminKontenPage from "./component/pages/AdminKontenpage";
import AdminPelatihanPage from "./component/pages/AdminPelatihanpage";
import AdminLaporanPage from "./component/pages/AdminLaporanpage";
import AdminDashboardPage from "./component/pages/AdminDashboardpage";
import ProfilePage from "./component/pages/Profilepage";
import EditProfilePage from "./component/pages/EditProfilePage";
import StatusPendaftaranPage from "./component/pages/StatusPendaftaranpage";
import FeedBackPage from "./component/pages/Feedbackpage";
import TentangKamiPage from "./component/pages/TentangKamipage";



function App() {
  return (
    <Routes>
      {/* Layout untuk User */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/daftar" element={<DaftarPage />} />
        {/* <Route path="/pelatihan" element={<DetailPelatihan />} /> */}
        <Route path="/tentangkami" element={<TentangKamiPage />} />
        <Route path="/pelatihan/:id" element={<DetailPelatihan />} />
        <Route path="/statusdaftar" element={<StatusPendaftaranPage />} />
        <Route path="/feedback" element={<FeedBackPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regis" element={<RegisterPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/editprofil" element={<EditProfilePage />} />
      </Route>

      {/* Layout untuk Admin */}
      <Route element={<AdminLayout />}>
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/adpeserta" element={<AdminPesertaPage />} />
        <Route path="/adkonten" element={<AdminKontenPage />} />
        <Route path="/adpelatihan" element={<AdminPelatihanPage />} />
        <Route path="/adlaporan" element={<AdminLaporanPage />} />
      </Route>
    </Routes>
  );
}

export default App;
