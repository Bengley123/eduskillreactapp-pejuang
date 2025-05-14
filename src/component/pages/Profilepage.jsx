// src/components/pages/ProfilePage.jsx
//import ProfileInfo from "../molecules/ProfileInfo";
import ProfileInfo from "../Elements/ProfileUser/ProfileInfo";
import Button from "../Elements/Button/index"
import imgProfile from "../../assets/profileimg.jpg";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            src={imgProfile}
            alt="Foto Profil"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h2 className="font-medium text-gray-800">Profil saya</h2>
        </div>
        <div className="mt-4">
          <ProfileInfo label="Nama" value="Davud Gaded" />
          <ProfileInfo label="Tgl Lahir" value="19-Maret-1999" />
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={() => navigate("/editprofil")}>✏️ Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
