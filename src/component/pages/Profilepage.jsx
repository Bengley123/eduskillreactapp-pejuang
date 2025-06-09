import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../Fragments/ProfileCard";
import CourseList from "../Fragments/CourseList";
import StatusStepper from "../Fragments/StatusStepper";
import FeedbackModal from "../Fragments/FeedbackModal";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Data dummy courses - nanti bisa diganti dengan data dari API
  const [courses, setCourses] = useState([
    {
      //kode: "2425/1",
      nama: "PELATIHAN DIGITAL MARKETING",
      //progress: 75,
      hasActivity: true,
      status: 2
    },
  ]);

  const statusSteps = [
    "Unggah Persyaratan",
    "Lolos Seleksi",
    "Pelaksanaan Pelatihan",
    "Feedback Pelatihan",
    "Selesai Pelatihan",
  ];

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  const handleSubmitFeedback = async () => {
    try {
      const token = localStorage.getItem("jwt");
      await axios.post(
        "http://localhost:8000/api/feedback",
        { 
          isi_feedback: feedback,
          course_id: selectedCourse?.id // Kirim course ID juga
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Feedback berhasil dikirim!");
      setIsModalOpen(false);
      setFeedback("");
    } catch (error) {
      console.error("Gagal mengirim feedback:", error);
      alert("Terjadi kesalahan saat mengirim feedback.");
    }
  };

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

        // Fetch courses data - tambahkan endpoint untuk mengambil course
        // const coursesResponse = await axios.get("http://localhost:8000/api/courses", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
        // setCourses(coursesResponse.data);

      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Memuat profil...</div>;
  if (!user) return <div className="text-center mt-10 text-red-500">Gagal memuat data pengguna.</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center space-y-6">
      <ProfileCard user={user} onEdit={() => navigate("/editprofil")} />
      
      {!selectedCourse ? (
        // Tampilkan Course List ketika belum ada course yang dipilih
        <CourseList 
          courses={courses} 
          onSelectCourse={handleSelectCourse}
        />
      ) : (
        // Tampilkan Status Stepper ketika course sudah dipilih
        <>
          {/* Header dengan tombol kembali */}
          <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToCourses}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Kembali</span>
              </button>
            </div>
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-gray-800">{selectedCourse.nama}</h2>
              {/* <p className="text-sm text-gray-600">Kode: {selectedCourse.kode}</p> */}
            </div>
          </div>

          <StatusStepper
            steps={statusSteps}
            currentStep={selectedCourse.status}
            onFeedback={() => setIsModalOpen(true)}
          />
        </>
      )}

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitFeedback}
        feedback={feedback}
        setFeedback={setFeedback}
      />
    </div>
  );
};

export default ProfilePage;