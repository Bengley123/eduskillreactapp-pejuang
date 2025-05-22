import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes, FaTrashAlt, FaEdit, FaSave, FaUserFriends, FaExclamationCircle, FaCheck } from 'react-icons/fa';

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
  { 
    id: 5,
    nama: 'Teknik Bordiran Modern', 
    tanggalMulai: '20 Agustus 2025',
    tanggalSelesai: '20 Oktober 2025',
    deskripsi: 'Pelatihan teknik bordiran dengan menggunakan mesin modern',
    instruktur: 'Pak Ahmad Ridwan',
    kapasitas: '18 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,300,000'
  },
  { 
    id: 6,
    nama: 'Cutting Pattern Profesional', 
    tanggalMulai: '1 September 2025',
    tanggalSelesai: '1 November 2025',
    deskripsi: 'Pelatihan pembuatan pola dan cutting untuk berbagai jenis pakaian',
    instruktur: 'Ibu Dewi Sartika',
    kapasitas: '22 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,600,000'
  },
  { 
    id: 7,
    nama: 'Fashion Merchandising', 
    tanggalMulai: '15 September 2025',
    tanggalSelesai: '15 November 2025',
    deskripsi: 'Pelatihan merchandising dan marketing untuk produk fashion',
    instruktur: 'Pak Rizki Pratama',
    kapasitas: '20 peserta',
    lokasi: 'Workshop Bina Essa, Bandung',
    biaya: 'Rp. 2,700,000'
  }
];

// Data mockup untuk pelamar
const dataPelamarMockupAwal = {
  1: [ // Pelamar untuk pelatihan ID 1
    { id: 101, nama: 'Budi Belus', email: 'budi.belus@gmail.com', telepon: '08123456789', status: 'Diterima', tanggalDaftar: '5 Mei 2025' },
    { id: 102, nama: 'David Dagu', email: 'david.dagu@gmail.com', telepon: '08234567890', status: 'Ditinjau', tanggalDaftar: '6 Mei 2025' },
    { id: 103, nama: 'Ujang Kijang', email: 'ujang.kijang@gmail.com', telepon: '08345678901', status: 'Ditolak', tanggalDaftar: '7 Mei 2025' },
    { id: 104, nama: 'Deddy Botak', email: 'deddy.botak@gmail.com', telepon: '08456789012', status: 'Diterima', tanggalDaftar: '8 Mei 2025' },
    { id: 105, nama: 'Siti Aminah', email: 'siti.aminah@gmail.com', telepon: '08567890123', status: 'Ditinjau', tanggalDaftar: '9 Mei 2025' },
    { id: 106, nama: 'Agus Salim', email: 'agus.salim@gmail.com', telepon: '08678901234', status: 'Ditolak', tanggalDaftar: '10 Mei 2025' },
    { id: 107, nama: 'Maya Sari', email: 'maya.sari@gmail.com', telepon: '08789012345', status: 'Diterima', tanggalDaftar: '11 Mei 2025' },
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
  4: [], // Belum ada pelamar untuk pelatihan ID 4
  5: [
    { id: 501, nama: 'Lestari Dewi', email: 'lestari.dewi@gmail.com', telepon: '08123987654', status: 'Diterima', tanggalDaftar: '16 Mei 2025' },
  ],
  6: [
    { id: 601, nama: 'Andi Wijaya', email: 'andi.wijaya@gmail.com', telepon: '08234876543', status: 'Ditinjau', tanggalDaftar: '18 Mei 2025' },
    { id: 602, nama: 'Sari Indah', email: 'sari.indah@gmail.com', telepon: '08345765432', status: 'Diterima', tanggalDaftar: '19 Mei 2025' },
  ],
  7: []
};

const TableSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataPelatihan, setDataPelatihan] = useState(dataPelatihanAwal);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const [selectedPelatihan, setSelectedPelatihan] = useState(null);
  const [editedPelatihan, setEditedPelatihan] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // State untuk modal pelamar
  const [showPelamarModal, setShowPelamarModal] = useState(false);
  const [selectedPelamarList, setSelectedPelamarList] = useState([]);
  const [selectedPelatihanNama, setSelectedPelatihanNama] = useState('');
  const [selectedPelatihanId, setSelectedPelatihanId] = useState(null);
  const [dataPelamarMockup, setDataPelamarMockup] = useState(dataPelamarMockupAwal);
  
  // State untuk popup status pelamar
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [selectedPelamar, setSelectedPelamar] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  
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

  // Calculate pagination
  const totalPages = Math.ceil(dataPelatihan.length / itemsPerPage);
  const paginatedData = dataPelatihan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
    setSelectedPelatihanId(pelatihan.id);
    setShowPelamarModal(true);
  };

  // Fungsi untuk membuka popup status pelamar
  const handleChangeStatus = (pelamar) => {
    setSelectedPelamar(pelamar);
    setNewStatus(pelamar.status); // Set status saat ini sebagai default
    setShowStatusPopup(true);
  };

  // Fungsi untuk menyimpan perubahan status
  const handleSaveStatus = () => {
    if (selectedPelamar && selectedPelatihanId) {
      const updatedMockup = { ...dataPelamarMockup };
      const pelamarIndex = updatedMockup[selectedPelatihanId].findIndex(p => p.id === selectedPelamar.id);
      
      if (pelamarIndex !== -1) {
        updatedMockup[selectedPelatihanId][pelamarIndex].status = newStatus;
        setDataPelamarMockup(updatedMockup);
        
        // Update juga selectedPelamarList untuk refresh tampilan
        const updatedPelamarList = updatedMockup[selectedPelatihanId];
        setSelectedPelamarList(updatedPelamarList);
      }
    }
    
    setShowStatusPopup(false);
    setSelectedPelamar(null);
    setNewStatus('');
  };

  const handleDelete = (index) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pelatihan ini?')) {
      const actualIndex = (currentPage - 1) * itemsPerPage + index;
      const newData = [...dataPelatihan];
      newData.splice(actualIndex, 1);
      setDataPelatihan(newData);
      
      // Adjust current page if necessary
      const newTotalPages = Math.ceil(newData.length / itemsPerPage);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
      
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

  const handleSubmit = () => {
    if (form.nama && form.tanggalMulai && form.tanggalSelesai && form.deskripsi && form.instruktur && form.kapasitas && form.lokasi && form.biaya) {
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
    } else {
      alert('Mohon lengkapi semua field yang wajib diisi');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
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
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Nama Pelatihan</th>
                <th className="px-4 py-2">Tanggal Mulai</th>
                <th className="px-4 py-2">Instruktur</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((pelatihan, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td className="px-4 py-2">{pelatihan.nama}</td>
                  <td className="px-4 py-2">{pelatihan.tanggalMulai}</td>
                  <td className="px-4 py-2">{pelatihan.instruktur}</td>
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

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">
            Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, dataPelatihan.length)} dari {dataPelatihan.length} data
          </div>
          <div className="flex justify-center space-x-2">
            <button
              onClick={handlePrevPage}
              className="px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-2 border rounded ${
                  currentPage === i + 1 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className="px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
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
                <div className="space-y-2">
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
                </div>
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
                        const index = paginatedData.findIndex(p => p.id === selectedPelatihan.id);
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" style={{zIndex: 9000}}>
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
                            <button 
                              onClick={() => handleChangeStatus(pelamar)}
                              className="text-blue-500 hover:text-blue-700 transition-colors"
                              title="Ubah Status"
                            >
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

        {/* Popup Status Pelamar */}
        {showStatusPopup && selectedPelamar && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4" style={{zIndex: 9999}}>
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Ubah Status Pelamar</h3>
                <button 
                  onClick={() => setShowStatusPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nama Pelamar:</p>
                  <p className="font-medium text-base">{selectedPelamar.nama}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status Saat Ini:</p>
                  <div className="mb-2">
                    {getStatusBadge(selectedPelamar.status)}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Pilih Status Baru:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Ditinjau">Ditinjau</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
                
                <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                  <strong>Keterangan:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• <span className="font-medium">Ditinjau:</span> Status default, sedang dalam proses review</li>
                    <li>• <span className="font-medium">Diterima:</span> Pelamar diterima untuk mengikuti pelatihan</li>
                    <li>• <span className="font-medium">Ditolak:</span> Pelamar tidak memenuhi syarat pelatihan</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowStatusPopup(false)}
                  className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded text-sm transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleSaveStatus}
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm inline-flex items-center gap-1 transition-colors"
                >
                  <FaCheck size={12} /> Simpan
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