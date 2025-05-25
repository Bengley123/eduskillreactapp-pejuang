import React, { useState } from "react";
import axios from "axios";
import InputWithLabel from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const DaftarPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    noTelp: "",
    email: "",
    nik: "",
    pendidikan: "",
    alamat: "",
    ktp: null,
    kk: null,
    ijazah: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://127.0.0.1:8000/api/daftar-pelatihan", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Pendaftaran berhasil!");
      setFormData({
        nama: "",
        noTelp: "",
        email: "",
        nik: "",
        pendidikan: "",
        alamat: "",
        ktp: null,
        kk: null,
        ijazah: null,
        photo: null,
      });
    } catch (error) {
      console.error("Gagal mendaftar:", error);
      alert("Terjadi kesalahan saat mendaftar.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Upload Syarat Pendaftaran
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputWithLabel
              label="Nama"
              type="text"
              name="nama"
              placeholder="Masukkan Nama"
              value={formData.nama}
              onChange={handleChange}
            />
            <InputWithLabel
              label="No. Telp"
              type="text"
              name="noTelp"
              placeholder="Masukkan No. Telp"
              value={formData.noTelp}
              onChange={handleChange}
            />
            <InputWithLabel
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputWithLabel
              label="NIK"
              type="text"
              name="nik"
              placeholder="Masukkan NIK"
              value={formData.nik}
              onChange={handleChange}
            />
            <div>
              <label className="block font-medium text-gray-700 mb-2">Pendidikan</label>
              <select
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Pendidikan</option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
              </select>
            </div>
            <InputWithLabel
              label="Alamat"
              type="text"
              name="alamat"
              placeholder="Masukkan Alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
          </div>

          {/* Upload Dokumen */}
          <div className="space-y-4">
            {["ktp", "kk", "ijazah", "photo"].map((field) => (
              <div key={field}>
                <label className="block font-medium text-gray-700 mb-2">
                  {`Unggah ${field.toUpperCase()}`}
                </label>
                <input
                  type="file"
                  name={field}
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button type="submit" size="md" variant="primary" style={{ width: "385px", height: "49px" }}>
              Daftar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DaftarPage;
