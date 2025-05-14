import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import LogoBinaEssa from '../../assets/logo-bina-essa1.jpg';

const dataPesertaAwal = [
  { nama: 'Budi Belus', pelatihan: 'Penjahitan profesional siap industri Ekspor', status: 'Ditinjau' },
  { nama: 'David Dagu', pelatihan: 'Penjahitan profesional siap industri Ekspor', status: 'Ditolak' },
  { nama: 'Ujang Kijang', pelatihan: 'Penjahitan profesional siap industri Ekspor', status: 'Diterima' },
  { nama: 'Deddy Botak', pelatihan: 'Penjahitan profesional siap industri Ekspor', status: 'Ditinjau' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Ditinjau': return 'text-yellow-500';
    case 'Ditolak': return 'text-red-500';
    case 'Diterima': return 'text-green-500';
    default: return 'text-gray-700';
  }
};

export default function AdminPesertaPage() {
  const [showForm, setShowForm] = useState(false);
  const [dataPeserta, setDataPeserta] = useState(dataPesertaAwal);
  const [form, setForm] = useState({ nama: '', pelatihan: '', status: 'Ditinjau' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataPeserta([...dataPeserta, form]);
    setForm({ nama: '', pelatihan: '', status: 'Ditinjau' });
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <header className="bg-blue-500 p-4">
            <div className="flex justify-end">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-100 transition">
                <FaUserCircle className="text-xl" />
                <span>Profile</span>
                </button>
            </div>
        </header>


        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Peserta</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center gap-2"
            >
              <FaPlus /> Tambah
            </button>   
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">Nama</th>
                  <th className="text-left p-2">Pelatihan</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">More</th>
                </tr>
              </thead>
              <tbody>
                {dataPeserta.map((peserta, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-2">{peserta.nama}</td>
                    <td className="p-2">{peserta.pelatihan}</td>
                    <td className={`p-2 ${getStatusColor(peserta.status)}`}>{peserta.status}</td>
                    <td className="p-2"><FaSearch /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Form Tambah Data */}
          {showForm && (
            <div className="mt-6 bg-white border p-4 rounded shadow-md w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">Tambah Data Peserta</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm">Nama</label>
                  <input type="text" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Pelatihan</label>
                  <input type="text" value={form.pelatihan} onChange={(e) => setForm({ ...form, pelatihan: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Status</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full p-2 border rounded">
                    <option value="Ditinjau">Ditinjau</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded">Batal</button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Simpan</button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
