import React from "react";
import Button from "../Elements/Button/index";
import imgProfile from "../../assets/profileimg.jpg";

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <img
          src={imgProfile}
          alt="Foto Profil"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{user.nama}</h2>
          <p className="text-gray-600 text-sm">{user.tanggal_lahir}</p>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.no_telp}</p>
        </div>
      </div>
      <Button variant="primary" size="lg" onClick={onEdit}>
        Edit Profil
      </Button>
    </div>
  );
};

export default ProfileCard;
