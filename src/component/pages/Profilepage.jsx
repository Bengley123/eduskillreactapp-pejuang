import React from "react";
import imgProfile from "../../assets/profileimg.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/index";

const ProfilePage = () => {
  const navigate = useNavigate();

  const statusSteps = [
    "Unggah persyaratan",
    "Lolos seleksi",
    "Pelaksanaan pelatihan",
    "Feedback Pelatihan",
    "Selesai Pelatihan",
  ];

  const currentStepIndex = 3; // Misalnya user sudah sampai tahap "Feedback Pelatihan"

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center space-y-6">
      {/* CARD PROFIL */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <img
            src={imgProfile}
            alt="Foto Profil"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Davud gadet</h2>
            <p className="text-gray-600 text-sm">19-maret-1999</p>
            <p className="text-gray-600 text-sm">davudgadet@gmail.com</p>
            <p className="text-gray-600 text-sm">0812345678912</p>
          </div>
        </div>
        <div>
          <Button onClick={() => navigate("/editprofil")}>Edit Profil</Button>
        </div>
      </div>

      {/* CARD STATUS LAMARAN */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Status Lamaran</h3>
        <ol className="relative border-l-2 border-gray-300 ml-4">
          {statusSteps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;

            return (
              <li key={index} className="mb-10 ml-6 relative">
                {/* Titik */}
                <span
                  className={`absolute flex items-center justify-center w-4 h-4 rounded-full 
                    -left-5 top-1 
                    ${isCompleted ? "bg-blue-600" : "bg-gray-300"}`}
                />

                {/* Label */}
                <p
                  className={`${
                    isCompleted
                      ? "text-blue-700 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>

                {/* Tombol Feedback di bawah status Feedback Pelatihan */}
                {step === "Feedback Pelatihan" && currentStepIndex >= 3 && (
                  <div className="mt-2">
                    <Button
                      className="text-sm px-1 py-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => navigate("/feedback")}
                    >
                      Beri Feedback
                    </Button>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ProfilePage;
