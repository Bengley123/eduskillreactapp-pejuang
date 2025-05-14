import React from 'react';
import { FaEnvelope, FaUser, FaSignature, FaPhone, FaLock } from 'react-icons/fa';
//import bgForm from "../../assets/bgform.jpg";


const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        //style={{ backgroundImage: `url(${bgForm})` }}
      >
        <div className="bg-white p-8 rounded-md shadow-md w-[350px]">
          <h2 className="text-2xl font-semibold text-center mb-1">EduSkill</h2>
          <p className="text-sm text-center text-blue-600 mb-4 cursor-pointer hover:underline">Register</p>

          <form className="space-y-3">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaSignature className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Nama"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Nomor telp"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className="w-full outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white w-full py-2 rounded-md hover:bg-gray-900"
            >
              Daftar
            </button>
          </form>

          <p className="text-xs text-center text-gray-600 mt-3">
            Sudah memiliki akun? <span className="text-blue-600 hover:underline cursor-pointer">Login sekarang</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
