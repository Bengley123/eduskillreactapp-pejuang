import React from "react";
import imgProfile from "../../assets/profileimg.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";

const ProfilePage = () => {
  const navigate = useNavigate();

  const statusSteps = [
    "Unggah Persyaratan",
    "Lolos Seleksi",
    "Pelaksanaan Pelatihan",
    "Feedback Pelatihan",
    "Selesai Pelatihan",
  ];

  const currentStepIndex = 1; // Tahap terakhir user

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
            <h2 className="text-xl font-semibold text-gray-800">Davud Gadet</h2>
            <p className="text-gray-600 text-sm">19-Maret-1999</p>
            <p className="text-gray-600 text-sm">davudgadet@gmail.com</p>
            <p className="text-gray-600 text-sm">0812345678912</p>
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/editprofil")}
        >
          Edit Profil
        </Button>
      </div>

      {/* CARD STATUS LAMARAN */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Status Lamaran</h3>
        <ol className="relative border-l-2 border-gray-300 ml-4">
          {statusSteps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;

            return (
              <li key={index} className="mb-10 ml-6 relative">
                <span
                  className={`absolute flex items-center justify-center w-4 h-4 rounded-full 
                    -left-5 top-1 
                    ${isCompleted ? "bg-blue-600" : "bg-gray-300"}`}
                />
                <p
                  className={`${
                    isCompleted
                      ? "text-blue-700 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>

                {/* Tombol Feedback */}
                {step === "Feedback Pelatihan" && currentStepIndex >= 3 && (
                  <div className="mt-2">
                    <Button
                      variant="secondary"
                      size="sm"
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
