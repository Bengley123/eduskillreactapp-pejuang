import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import LoginForm from "../Fragments/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("userRole");

    if (isLoggedIn === "true") {
      if (role === "admin") {
        navigate("/adpeserta");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username,
        password,
      });

      const data = response.data; // `data` is the entire object from Laravel

      if (data.access_token) {
        localStorage.setItem("jwt", data.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
      }

      // --- CORRECTION ---
      // Get the role from the correct nested path
      const userRole = data.user.peran;

      localStorage.setItem("userRole", userRole); // Save the correct role

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      localStorage.setItem("isLoggedIn", "true");

      // --- CORRECTION ---
      // Check against the correct userRole variable
      if (userRole === "admin" || userRole === "ketua") {
        navigate("/admindashboard");
        window.location.reload();
      } else if (userRole === "peserta") {
        navigate("/");
        window.location.reload();
      } else {
        // This block should now be very hard to reach
        setError("Role not recognized.");
      }
    } catch (err) {
      setError(
        "Login gagal: " +
          (err.response?.data?.message || "Cek kembali username dan password")
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-[350px]">
          <h2 className="text-2xl font-semibold text-center mb-1">EduSkill</h2>
          <p className="text-sm text-center text-blue-600 mb-4">Login</p>

          <LoginForm
            username={username}
            password={password}
            onUsernameChange={(e) => setUsername(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
          />

          <p className="text-xs text-center text-gray-600 mt-3">
            Belum memiliki akun?{" "}
            <Link to="/regis" className="text-blue-600 hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
