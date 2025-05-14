import Button from "../Elements/Button/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "Davud Gaded",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setFormData({ ...formData, foto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    console.log("Data disimpan:", formData);
    navigate("/profile");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-8">
        <h2 className="text-center text-2xl text-dark-700 mb-5">Edit Profil</h2>
        <div className="space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3"
            />
          </div>

          {/* Foto */}
          <div>
            <label htmlFor="fotoedit" className="block font-medium text-gray-700 mb-2">
              Upload Foto
            </label>
            <input
              type="file"
              id="fotoedit"
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {/* Tombol */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={() => navigate("/profil")}
              className="bg-gray-400 hover:bg-gray-500"
            >
              Batal
            </Button>
            <Button onClick={handleSave}>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
