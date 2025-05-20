import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes, FaTrashAlt, FaEdit, FaSave, FaUserFriends, FaExclamationCircle } from 'react-icons/fa';

const dataPelatihanAwal = [
  { 
    id: 1,
    nama: 'Penjahitan profesional siap industri Ekspor', 
    tanggalMulai: '15 Juni 2025',
    tanggalSelesai: '15 Agustus 2025',
    deskripsi: 'Pelatihan intensif untuk penjahitan profesional dengan standar ekspor',
    instruktur: 'Pak Budi Santoso',
    kapasitas: '30 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,500,000'
  },
  { 
    id: 2,
    nama: 'Desain Fashion Modern', 
    tanggalMulai: '1 Juli 2025',
    tanggalSelesai: '1 September 2025',
    deskripsi: 'Pelatihan desain fashion dengan tren terkini untuk pasar global',
    instruktur: 'Ibu Sinta Wijaya',
    kapasitas: '25 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 3,000,000'
  },
  { 
    id: 3,
    nama: 'Manajemen Produksi Garmen', 
    tanggalMulai: '10 Juli 2025',
    tanggalSelesai: '10 September 2025',
    deskripsi: 'Pelatihan manajemen dan pengawasan produksi garmen skala industri',
    instruktur: 'Pak Denny Pratama',
    kapasitas: '20 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,800,000'
  },
  { 
    id: 4,
    nama: 'Quality Control Tekstil', 
    tanggalMulai: '5 Agustus 2025',
    tanggalSelesai: '5 Oktober 2025',
    deskripsi: 'Pelatihan kontrol kualitas untuk produk tekstil dan garmen',
    instruktur: 'Ibu Ratna Dewi',
    kapasitas: '15 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,200,000'
  },
];

// Data mockup untuk pelamar
const dataPelamarMockup = {
  1: [ // Pelamar untuk pelatihan ID 1
    { id: 101, nama: 'Ahmad Rizky', email: 'ahmad.rizky@gmail.com', telepon: '08123456789', status: 'Diterima', tanggalDaftar: '5 Mei 2025' },
    { id: 102, nama: 'Siti Amelia', email: 'siti.amelia@gmail.com', telepon: '08234567890', status: 'Ditinjau', tanggalDaftar: '6 Mei 2025' },
    { id: 103, nama: 'Budi Setiawan', email: 'budi.setiawan@gmail.com', telepon: '08345678901', status: 'Ditolak', tanggalDaftar: '7 Mei 2025' },
    { id: 104, nama: 'Diana Putri', email: 'diana.putri@gmail.com', telepon: '08456789012', status: 'Diterima', tanggalDaftar: '8 Mei 2025' },
  ],
  2: [ // Pelamar untuk pelatihan ID 2
    { id: 201, nama: 'Rini Wulandari', email: 'rini.wulandari@gmail.com', telepon: '08567890123', status: 'Diterima', tanggalDaftar: '10 Mei 2025' },
    { id: 202, nama: 'Andri Santoso', email: 'andri.santoso@gmail.com', telepon: '08678901234', status: 'Ditinjau', tanggalDaftar: '11 Mei 2025' },
  ],
  3: [ // Pelamar untuk pelatihan ID 3
    { id: 301, nama: 'Maya Indah', email: 'maya.indah@gmail.com', telepon: '08789012345', status: 'Diterima', tanggalDaftar: '12 Mei 2025' },
    { id: 302, nama: 'Dimas Prayoga', email: 'dimas.prayoga@gmail.com', telepon: '08890123456', status: 'Ditolak', tanggalDaftar: '13 Mei 2025' },
    { id: 303, nama: 'Nina Kartika', email: 'nina.kartika@gmail.com', telepon: '08901234567', status: 'Ditinjau', tanggalDaftar: '14 Mei 2025' },
  ],
  4: [] // Belum ada pelamar untuk pelatihan ID 4
};

const TableSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataPelatihan, setDataPelatihan] = useState(dataPelatihanAwal);
  const [selectedPelatihan, setSelectedPelatihan] = useState(null);
  const [editedPelatihan, setEditedPelatihan] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // State untuk modal pelamar
  const [showPelamarModal, setShowPelamarModal] = useState(false);
  const [selectedPelamarList, setSelectedPelamarList] = useState([]);
  const [selectedPelatihanNama, setSelectedPelatihanNama] = useState('');
  
  const [form, setForm] = useState({ 
    nama: '', 
    tanggalMulai: '', 
    tanggalSelesai: '',
    deskripsi: '',
    instruktur: '',
    kapasitas: '',
    lokasi: '',
    biaya: ''
  });

  const handleViewDetail = (pelatihan) => {
    setSelectedPelatihan({...pelatihan});
    setEditedPelatihan({...pelatihan});
    setShowDetail(true);
    setIsEditing(false);
  };

  // Fungsi untuk melihat daftar pelamar
  const handleViewPelamar = (pelatihan) => {
    const pelamarList = dataPelamarMockup[pelatihan.id] || [];
    setSelectedPelamarList(pelamarList);
    setSelectedPelatihanNama(pelatihan.nama);
    setShowPelamarModal(true);
  };

  const handleDelete = (index) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pelatihan ini?')) {
      const newData = [...dataPelatihan];
      newData.splice(index, 1);
      setDataPelatihan(newData);
      setShowDetail(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedPelatihan({...selectedPelatihan});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = dataPelatihan.findIndex(p => p.id === selectedPelatihan.id);
    if (index !== -1) {
      const newData = [...dataPelatihan];
      newData[index] = {...editedPelatihan};
      setDataPelatihan(newData);
      setSelectedPelatihan({...editedPelatihan});
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedPelatihan({...editedPelatihan, [field]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPelatihan = {
      ...form,
      id: Math.max(...dataPelatihan.map(p => p.id), 0) + 1 // Generate ID baru
    };
    setDataPelatihan([...dataPelatihan, newPelatihan]);
    setForm({ 
      nama: '', 
      tanggalMulai: '', 
      tanggalSelesai: '',
      deskripsi: '',
      instruktur: '',
      kapasitas: '',
      lokasi: '',
      biaya: ''
    });
    setShowForm(false);
  };

  // Helper function untuk status badge pelamar
  const getStatusBadge = (status) => {
    switch(status) {
      case 'Diterima':
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Diterima</span>;
      case 'Ditolak':
        return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Ditolak</span>;
      case 'Ditinjau':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Ditinjau</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">{status}</span>;
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Kelola Pelatihan</h1>
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-1 text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 flex items-center gap-1"
          >
            <FaPlus size={12} /> Tambah
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Nama Pelatihan</th>
                <th className="px-4 py-2">Tanggal Mulai</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataPelatihan.map((pelatihan, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{pelatihan.nama}</td>
                  <td className="px-4 py-2">{pelatihan.tanggalMulai}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center gap-2">
                      <button 
                        onClick={() => handleViewDetail(pelatihan)}
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                        title="Lihat Detail Pelatihan"
                      >
                        <FaSearch />
                      </button>
                      <button 
                        onClick={() => handleViewPelamar(pelatihan)}
                        className="text-gray-600 hover:text-purple-500 transition-colors"
                        title="Lihat Pelamar"
                      >
                        <FaUserFriends />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form Tambah Pelatihan */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold">Tambah Pelatihan</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={14} />
                </button>
              </div>
              
              <div className="max-h-80 overflow-y-auto pr-1">
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label className="block text-xs text-gray-500">Nama Pelatihan</label>
                    <input 
                      type="text" 
                      value={form.nama}
                      onChange={(e) => setForm({...form, nama: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Tanggal Mulai</label>
                    <input 
                      type="text" 
                      value={form.tanggalMulai}
                      onChange={(e) => setForm({...form, tanggalMulai: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                      placeholder="Contoh: 15 Juni 2025"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Tanggal Selesai</label>
                    <input 
                      type="text" 
                      value={form.tanggalSelesai}
                      onChange={(e) => setForm({...form, tanggalSelesai: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                      placeholder="Contoh: 15 Agustus 2025"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Deskripsi</label>
                    <textarea 
                      value={form.deskripsi}
                      onChange={(e) => setForm({...form, deskripsi: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      rows="2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Instruktur</label>
                    <input 
                      type="text" 
                      value={form.instruktur}
                      onChange={(e) => setForm({...form, instruktur: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Kapasitas</label>
                    <input 
                      type="text" 
                      value={form.kapasitas}
                      onChange={(e) => setForm({...form, kapasitas: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                      placeholder="Contoh: 30 peserta"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Lokasi</label>
                    <input 
                      type="text" 
                      value={form.lokasi}
                      onChange={(e) => setForm({...form, lokasi: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Biaya</label>
                    <input 
                      type="text" 
                      value={form.biaya}
                      onChange={(e) => setForm({...form, biaya: e.target.value})}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      required
                      placeholder="Contoh: Rp. 2,500,000"
                    />
                  </div>
                </form>
              </div>
              
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-xs"
                >
                  Batal
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {showDetail && selectedPelatihan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold">Detail Pelatihan</h3>
                <button 
                  onClick={() => setShowDetail(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={14} />
                </button>
              </div>
              
              <div className="space-y-2 mb-3 max-h-72 overflow-y-auto pr-1">
                <div>
                  <p className="text-xs text-gray-500">Nama Pelatihan</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.nama}
                      onChange={(e) => handleInputChange('nama', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.nama}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tanggal Mulai</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.tanggalMulai}
                      onChange={(e) => handleInputChange('tanggalMulai', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.tanggalMulai}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tanggal Selesai</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.tanggalSelesai}
                      onChange={(e) => handleInputChange('tanggalSelesai', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.tanggalSelesai}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Deskripsi</p>
                  {isEditing ? (
                    <textarea 
                      value={editedPelatihan.deskripsi}
                      onChange={(e) => handleInputChange('deskripsi', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                      rows="2"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.deskripsi}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Instruktur</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.instruktur}
                      onChange={(e) => handleInputChange('instruktur', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.instruktur}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Kapasitas</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.kapasitas}
                      onChange={(e) => handleInputChange('kapasitas', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.kapasitas}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Lokasi</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.lokasi}
                      onChange={(e) => handleInputChange('lokasi', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.lokasi}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500">Biaya</p>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editedPelatihan.biaya}
                      onChange={(e) => handleInputChange('biaya', e.target.value)}
                      className="w-full p-1 border rounded mt-0.5 text-xs"
                    />
                  ) : (
                    <p className="font-medium text-sm">{selectedPelatihan.biaya}</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-xs"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded inline-flex items-center gap-1 text-xs"
                    >
                      <FaSave size={12} /> Simpan
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        const index = dataPelatihan.findIndex(p => p.id === selectedPelatihan.id);
                        if (index !== -1) handleDelete(index);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded inline-flex items-center gap-1 text-xs"
                    >
                      <FaTrashAlt size={12} /> Hapus
                    </button>
                    <button
                      onClick={handleEdit}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded inline-flex items-center gap-1 text-xs"
                    >
                      <FaEdit size={12} /> Edit
                    </button>
                    <button
                      onClick={() => setShowDetail(false)}
                      className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-xs"
                    >
                      Tutup
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Daftar Pelamar */}
        {showPelamarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Daftar Pelamar - {selectedPelatihanNama}</h3>
                <button 
                  onClick={() => setShowPelamarModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={14} />
                </button>
              </div>
              
              {selectedPelamarList.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nama</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Telepon</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tanggal Daftar</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-2 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedPelamarList.map((pelamar) => (
                        <tr key={pelamar.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 whitespace-nowrap">{pelamar.nama}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{pelamar.email}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{pelamar.telepon}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{pelamar.tanggalDaftar}</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            {getStatusBadge(pelamar.status)}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-center">
                            <button className="text-blue-500 hover:text-blue-700 transition-colors">
                              <FaEdit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaExclamationCircle className="mx-auto text-gray-400 text-3xl mb-3" />
                  <p className="text-gray-500">Belum ada pelamar untuk pelatihan ini</p>
                </div>
              )}
              
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowPelamarModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-3 py-1.5 rounded text-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSection;