import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../Fragments/ProfileCard";
import StatusStepper from "../Fragments/StatusStepper";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const statusSteps = [
    "Unggah Persyaratan",
    "Lolos Seleksi",
    "Pelaksanaan Pelatihan",
    "Feedback Pelatihan",
    "Selesai Pelatihan",
  ];

  const currentStepIndex = 1;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");

        const response = await axios.get("http://localhost:8000/api/peserta", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Memuat profil...</div>;
  }

  if (!user) {
    return <div className="text-center mt-10 text-red-500">Gagal memuat data pengguna.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center space-y-6">
      <ProfileCard user={user} onEdit={() => navigate("/editprofil")} />
      <StatusStepper
        steps={statusSteps}
        currentStep={currentStepIndex}
        onFeedback={() => navigate("/feedback")}
      />
    </div>
  );
};

export default ProfilePage;
