import React, { useState, useEffect } from 'react';
import { FaUser, FaLock, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import bgleft from "../../assets/bgkiri-login-regis.png";
import bgright from "../../assets/bgkanan-login-regis.png";

// Akun yang telah ditentukan
const accounts = [
  { username: 'ketua', password: 'password', role: 'ketua' },
  { username: 'admin', password: 'password', role: 'admin' },
  { username: 'user123', password: 'password', role: 'user' }
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ⛔️ Cegah akses login page jika user sudah login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');

    if (isLoggedIn === 'true') {
      if (role === 'admin') {
        navigate('/admindashboard');
      } else if (role === 'ketua') {
        navigate('/ketuadashboard');
      } else{
        navigate('/');
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const account = accounts.find(
        acc => acc.username === username && acc.password === password
      );

      if (account) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', account.role);
        localStorage.setItem('username', account.username);

        if (account.role === 'admin') {
          navigate('/admindashboard');
          window.location.reload();
        } else if (account.role === 'ketua') {
          navigate('/ketuadashboard');
          window.location.reload();
        } else{
          navigate('/');
          window.location.reload();
        }
      } else {
        setError('Username atau password salah');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background kiri */}
      {/* Background kiri */}
      <img
        src={bgleft}
        alt="Background Left"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[300px] w-auto object-contain z-0"
      />

      {/* Background kanan */}
      <img
        src={bgright}
        alt="Background Right"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[300px] w-auto object-contain z-0"
      />


      {/* Card Form Login */}
      <div className="relative z-10 w-full h-screen bg-cover bg-center flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-[350px]">
          <h2 className="text-2xl font-semibold text-center mb-1">EduSkill</h2>
          <p className="text-sm text-center text-blue-600 mb-4">Login</p>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-md mb-4 flex items-center text-sm">
              <FaExclamationCircle className="mr-2" />
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-medium">Username</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Username anda"
                className="w-full outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password anda"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`bg-gray-800 text-white w-full py-2 rounded-md hover:bg-gray-900 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <p className="text-xs text-center text-gray-600 mt-3">
            Belum memiliki akun?{" "}
            <Link to="/regis" className="text-blue-600 hover:underline">
              Daftar sekarang
            </Link>
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 font-medium">Akun untuk Testing:</p>
            <div className="mt-2 space-y-1">
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p className="font-medium">Admin:</p>
                <p>Username: admin</p>
                <p>Password: password</p>
              </div>
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p className="font-medium">User:</p>
                <p>Username: user123</p>
                <p>Password: password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default LoginPage;
