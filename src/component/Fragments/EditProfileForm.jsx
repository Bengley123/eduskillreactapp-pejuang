import React, { useState } from "react";
import InputWithLabel from "../Elements/Input/index";
import Button from "../Elements/Button/index";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const EditProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "Davud Gaded",
    tanggalLahir: "1999-03-19",
    email: "davudgadet@gmail.com",
    noTelp: "0812345678912",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "foto" ? files[0] : value,
    });
  };

  const handleSave = () => {
    console.log("Data disimpan:", formData);
    navigate("/profile");
  };

  return (
    <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-8">
      <h2 className="text-center text-2xl text-dark-700 mb-6 font-semibold">Edit Profil</h2>

      <div className="space-y-6">
        <InputWithLabel
          label="Nama Lengkap"
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          icon={FaUser}
        />

        {/* <InputWithLabel
          label="Tanggal Lahir"
          type="date"
          name="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleChange}
          icon={FaCalendarAlt}
        /> */}

        <InputWithLabel
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          icon={FaEnvelope}
        />

        <InputWithLabel
          label="Nomor Telepon"
          type="tel"
          name="noTelp"
          value={formData.noTelp}
          onChange={handleChange}
          icon={FaPhone}
        />

        {/* Upload Foto
        <div>
          <label htmlFor="foto" className="block text-sm font-medium mb-2">
            Upload Foto
          </label>
          <input
            type="file"
            name="foto"
            id="foto"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div> */}

        <div className="flex justify-between mt-8">
          <Button variant="secondary" onClick={() => navigate("/profil")}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
