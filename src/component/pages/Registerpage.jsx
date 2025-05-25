import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgForm from "../../assets/bgform2.png";
import {
  FaEnvelope,
  FaUser,
  FaSignature,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    name: "",
    nomor_telp: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.password_confirmation) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Gagal mendaftar");
      } else {
        setSuccess("Registrasi berhasil! Silakan login.");
        // Optionally, redirect to login page or clear form
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mendaftar");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgForm})` }}
      >
        <div className="bg-white p-8 rounded-md shadow-md w-[350px]">
          <h2 className="text-2xl font-semibold text-center mb-1">EduSkill</h2>
          <p className="text-sm text-center text-blue-600 mb-4">Register</p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaSignature className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                type="text"
                name="nomor_telp"
                value={form.nomor_telp}
                onChange={handleChange}
                placeholder="Nomor telp"
                className="w-full outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full outline-none"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password_confirmation"
                value={form.password_confirmation}
                onChange={handleChange}
                placeholder="Konfirmasi Password"
                className="w-full outline-none"
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="bg-gray-800 text-white w-full py-2 rounded-md hover:bg-gray-900"
            >
              Daftar
            </button>
          </form>

          <p className="text-xs text-center text-gray-600 mt-3">
            Sudah memiliki akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
