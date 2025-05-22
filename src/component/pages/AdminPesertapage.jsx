import React, { useState } from 'react';
import { FaSearch, FaPlus, FaUserCircle, FaTimes, FaTrashAlt, FaEdit, FaSave, FaFileAlt, FaFileImage, FaIdCard } from 'react-icons/fa';

const dataPesertaAwal = [
  { 
    nama: 'Budi Belus', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Diterima',
    email: 'budi.belus@gmail.com',
    telepon: '081234567890',
    alamat: 'Jl. Merdeka No. 123, Bandung',
    tanggalDaftar: '15 Mei 2025',
    ktp: 'ktp_budi_belus.pdf',
    kk: 'kk_budi_belus.pdf',
    pasPhoto: 'photo_budi_belus.jpg',
    ijazah: 'ijazah_budi_belus.pdf'
  },
  { 
    nama: 'David Dagu', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Diterima',
    email: 'david.dagu@gmail.com',
    telepon: '081298765432',
    alamat: 'Jl. Pahlawan No. 45, Bandung',
    tanggalDaftar: '10 Mei 2025',
    ktp: 'ktp_david_dagu.pdf',
    kk: 'kk_david_dagu.pdf',
    pasPhoto: 'photo_david_dagu.jpg',
    ijazah: 'ijazah_david_dagu.pdf'
  },
  { 
    nama: 'Ujang Kijang', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Diterima',
    email: 'ujang.kijang@gmail.com',
    telepon: '081387654321',
    alamat: 'Jl. Diponegoro No. 78, Bandung',
    tanggalDaftar: '5 Mei 2025',
    ktp: 'ktp_ujang_kijang.pdf',
    kk: 'kk_ujang_kijang.pdf',
    pasPhoto: 'photo_ujang_kijang.jpg',
    ijazah: 'ijazah_ujang_kijang.pdf'
  },
  { 
    nama: 'Deddy Botak', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Diterima',
    email: 'deddy.botak@gmail.com',
    telepon: '081345678901',
    alamat: 'Jl. Sudirman No. 90, Bandung',
    tanggalDaftar: '1 Mei 2025',
    ktp: 'ktp_deddy_botak.pdf',
    kk: 'kk_deddy_botak.pdf',
    pasPhoto: 'photo_deddy_botak.jpg',
    ijazah: 'ijazah_deddy_botak.pdf'
  },
  { 
    nama: 'Siti Aminah', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Ditinjau',
    email: 'siti.aminah@gmail.com',
    telepon: '081456789012',
    alamat: 'Jl. Ahmad Yani No. 67, Bandung',
    tanggalDaftar: '20 Mei 2025',
    ktp: 'ktp_siti_aminah.pdf',
    kk: 'kk_siti_aminah.pdf',
    pasPhoto: 'photo_siti_aminah.jpg',
    ijazah: 'ijazah_siti_aminah.pdf'
  },
  { 
    nama: 'Agus Salim', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Ditolak',
    email: 'agus.salim@gmail.com',
    telepon: '081567890123',
    alamat: 'Jl. Gatot Subroto No. 89, Bandung',
    tanggalDaftar: '18 Mei 2025',
    ktp: 'ktp_agus_salim.pdf',
    kk: 'kk_agus_salim.pdf',
    pasPhoto: 'photo_agus_salim.jpg',
    ijazah: 'ijazah_agus_salim.pdf'
  },
  { 
    nama: 'Maya Sari', 
    pelatihan: 'Penjahitan profesional siap industri Ekspor', 
    status: 'Diterima',
    email: 'maya.sari@gmail.com',
    telepon: '081678901234',
    alamat: 'Jl. Cihampelas No. 45, Bandung',
    tanggalDaftar: '12 Mei 2025',
    ktp: 'ktp_maya_sari.pdf',
    kk: 'kk_maya_sari.pdf',
    pasPhoto: 'photo_maya_sari.jpg',
    ijazah: 'ijazah_maya_sari.pdf'
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Ditinjau': return 'text-yellow-500';
    case 'Ditolak': return 'text-red-500';
    case 'Diterima': return 'text-green-500';
    default: return 'text-gray-700';
  }
};

const DocumentIcon = ({ type }) => {
  switch (type) {
    case 'ktp':
      return <FaIdCard className="text-blue-500" title="KTP" />;
    case 'kk':
      return <FaFileAlt className="text-green-500" title="KK" />;
    case 'pasPhoto':
      return <FaFileImage className="text-purple-500" title="Pas Photo" />;
    case 'ijazah':
      return <FaFileAlt className="text-orange-500" title="Ijazah" />;
    default:
      return <FaFileAlt />;
  }
};

const DocumentLink = ({ filename }) => {
  if (!filename) return <span className="text-gray-400">-</span>;
  
  return (
    <a 
      href={`/documents/${filename}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline flex items-center gap-1"
    >
      <DocumentIcon type={filename.split('_')[0]} />
      <span className="text-xs">Lihat</span>
    </a>
  );
};

export default function AdminPesertaPage() {
  const [showForm, setShowForm] = useState(false);
  const [dataPeserta, setDataPeserta] = useState(dataPesertaAwal);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const [form, setForm] = useState({ 
    nama: '', 
    pelatihan: '', 
    status: 'Ditinjau',
    email: '',
    telepon: '',
    alamat: '',
    tanggalDaftar: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    ktp: '',
    kk: '',
    pasPhoto: '',
    ijazah: ''
  });
  const [selectedPeserta, setSelectedPeserta] = useState(null);
  const [editedPeserta, setEditedPeserta] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Calculate pagination
  const totalPages = Math.ceil(dataPeserta.length / itemsPerPage);
  const paginatedData = dataPeserta.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSubmit = () => {
    if (form.nama && form.pelatihan && form.email && form.telepon && form.alamat) {
      setDataPeserta([...dataPeserta, form]);
      setForm({ 
        nama: '', 
        pelatihan: '', 
        status: 'Ditinjau',
        email: '',
        telepon: '',
        alamat: '',
        tanggalDaftar: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        ktp: '',
        kk: '',
        pasPhoto: '',
        ijazah: ''
      });
      setShowForm(false);
    } else {
      alert('Mohon lengkapi semua field yang wajib diisi');
    }
  };

  const handleViewDetail = (peserta) => {
    setSelectedPeserta({...peserta});
    setEditedPeserta({...peserta});
    setShowDetail(true);
    setIsEditing(false);
  };

  const handleDelete = (index) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus peserta ini?')) {
      const actualIndex = (currentPage - 1) * itemsPerPage + index;
      const newData = [...dataPeserta];
      newData.splice(actualIndex, 1);
      setDataPeserta(newData);
      
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
    setEditedPeserta({...selectedPeserta});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = dataPeserta.findIndex(p => p.nama === selectedPeserta.nama);
    if (index !== -1) {
      const newData = [...dataPeserta];
      newData[index] = {...editedPeserta};
      setDataPeserta(newData);
      setSelectedPeserta({...editedPeserta});
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedPeserta({...editedPeserta, [field]: value});
  };

  const handleFileUpload = (field, e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedPeserta({
        ...editedPeserta,
        [field]: file.name
      });
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

  return (
    <div className="flex min-h-screen">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-6">Peserta</h1>
            {/* <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center gap-2 hover:bg-blue-600"
            >
              <FaPlus /> Tambah
            </button> */}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">No</th>
                  <th className="text-left p-2">Nama</th>
                  <th className="text-left p-2">Pelatihan</th>
                  {/* <th className="text-left p-2">Status</th> */}
                  <th className="text-left p-2">KTP</th>
                  <th className="text-left p-2">KK</th>
                  <th className="text-left p-2">Pas Photo</th>
                  <th className="text-left p-2">Ijazah</th>
                  <th className="text-left p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((peserta, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="p-2">{peserta.nama}</td>
                    <td className="p-2">{peserta.pelatihan}</td>
                    {/* <td className={`p-2 ${getStatusColor(peserta.status)}`}>{peserta.status}</td> */}
                    <td className="p-2">
                      <DocumentLink filename={peserta.ktp} />
                    </td>
                    <td className="p-2">
                      <DocumentLink filename={peserta.kk} />
                    </td>
                    <td className="p-2">
                      <DocumentLink filename={peserta.pasPhoto} />
                    </td>
                    <td className="p-2">
                      <DocumentLink filename={peserta.ijazah} />
                    </td>
                    <td className="p-2">
                      <button 
                        onClick={() => handleViewDetail(peserta)}
                        className="text-gray-500 hover:text-blue-500 transition-colors"
                      >
                        <FaSearch />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination - Moved outside table */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">
              Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, dataPeserta.length)} dari {dataPeserta.length} data
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

          {/* Form Tambah Data */}
          {/* {showForm && (
            <div className="mt-6 bg-white border p-4 rounded shadow-md w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">Tambah Data Peserta</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm">Nama</label>
                  <input type="text" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Pelatihan</label>
                  <input type="text" value={form.pelatihan} onChange={(e) => setForm({ ...form, pelatihan: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Telepon</label>
                  <input type="text" value={form.telepon} onChange={(e) => setForm({ ...form, telepon: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Alamat</label>
                  <textarea value={form.alamat} onChange={(e) => setForm({ ...form, alamat: e.target.value })} className="w-full p-2 border rounded" required />
                </div>
                <div>
                  <label className="block text-sm">Status</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full p-2 border rounded">
                    <option value="Ditinjau">Ditinjau</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm">KTP</label>
                  <input type="file" onChange={(e) => setForm({ ...form, ktp: e.target.files[0]?.name || '' })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm">KK</label>
                  <input type="file" onChange={(e) => setForm({ ...form, kk: e.target.files[0]?.name || '' })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm">Pas Photo</label>
                  <input type="file" onChange={(e) => setForm({ ...form, pasPhoto: e.target.files[0]?.name || '' })} className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm">Ijazah</label>
                  <input type="file" onChange={(e) => setForm({ ...form, ijazah: e.target.files[0]?.name || '' })} className="w-full p-2 border rounded" />
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
                  <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Simpan</button>
                </div>
              </div>
            </div>
          )} */}

          {/* Detail Modal */}
          {showDetail && selectedPeserta && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">Detail Peserta</h3>
                  <button 
                    onClick={() => setShowDetail(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                <div className="space-y-3 mb-4 max-h-80 overflow-y-auto pr-1">
                  <div>
                    <p className="text-xs text-gray-500">Nama Lengkap</p>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editedPeserta.nama}
                        onChange={(e) => handleInputChange('nama', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-sm">{selectedPeserta.nama}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    {isEditing ? (
                      <input 
                        type="email" 
                        value={editedPeserta.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-sm">{selectedPeserta.email}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Telepon</p>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editedPeserta.telepon}
                        onChange={(e) => handleInputChange('telepon', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-sm">{selectedPeserta.telepon}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Alamat</p>
                    {isEditing ? (
                      <textarea 
                        value={editedPeserta.alamat}
                        onChange={(e) => handleInputChange('alamat', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                        rows="2"
                      />
                    ) : (
                      <p className="font-medium text-sm">{selectedPeserta.alamat}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Pelatihan</p>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={editedPeserta.pelatihan}
                        onChange={(e) => handleInputChange('pelatihan', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                      />
                    ) : (
                      <p className="font-medium text-sm">{selectedPeserta.pelatihan}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Tanggal Daftar</p>
                    <p className="font-medium text-sm">{selectedPeserta.tanggalDaftar}</p>
                  </div>
                  {/* <div>
                    <p className="text-xs text-gray-500">Status</p>
                    {isEditing ? (
                      <select
                        value={editedPeserta.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className="w-full p-1.5 border rounded mt-1 text-sm"
                      >
                        <option value="Ditinjau">Ditinjau</option>
                        <option value="Diterima">Diterima</option>
                        <option value="Ditolak">Ditolak</option>
                      </select>
                    ) : (
                      <p className={`font-medium text-sm ${getStatusColor(selectedPeserta.status)}`}>
                        {selectedPeserta.status}
                      </p>
                    )}
                  </div> */}
                  
                  {/* Dokumen */}
                  <div>
                    <p className="text-xs text-gray-500">KTP</p>
                    {isEditing ? (
                      <div>
                        <DocumentLink filename={editedPeserta.ktp} />
                        <input 
                          type="file" 
                          onChange={(e) => handleFileUpload('ktp', e)}
                          className="w-full p-1 border rounded mt-1 text-xs"
                        />
                      </div>
                    ) : (
                      <DocumentLink filename={selectedPeserta.ktp} />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">KK</p>
                    {isEditing ? (
                      <div>
                        <DocumentLink filename={editedPeserta.kk} />
                        <input 
                          type="file" 
                          onChange={(e) => handleFileUpload('kk', e)}
                          className="w-full p-1 border rounded mt-1 text-xs"
                        />
                      </div>
                    ) : (
                      <DocumentLink filename={selectedPeserta.kk} />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Pas Photo</p>
                    {isEditing ? (
                      <div>
                        <DocumentLink filename={editedPeserta.pasPhoto} />
                        <input 
                          type="file" 
                          onChange={(e) => handleFileUpload('pasPhoto', e)}
                          className="w-full p-1 border rounded mt-1 text-xs"
                        />
                      </div>
                    ) : (
                      <DocumentLink filename={selectedPeserta.pasPhoto} />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Ijazah</p>
                    {isEditing ? (
                      <div>
                        <DocumentLink filename={editedPeserta.ijazah} />
                        <input 
                          type="file" 
                          onChange={(e) => handleFileUpload('ijazah', e)}
                          className="w-full p-1 border rounded mt-1 text-xs"
                        />
                      </div>
                    ) : (
                      <DocumentLink filename={selectedPeserta.ijazah} />
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-300 hover:bg-gray-400 px-3 py-1.5 rounded text-sm"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded inline-flex items-center gap-1 text-sm"
                      >
                        <FaSave size={14} /> Simpan
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          const index = paginatedData.findIndex(p => p.nama === selectedPeserta.nama);
                          if (index !== -1) handleDelete(index);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded inline-flex items-center gap-1 text-sm"
                      >
                        <FaTrashAlt size={14} /> Hapus
                      </button>
                      <button
                        onClick={handleEdit}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded inline-flex items-center gap-1 text-sm"
                      >
                        <FaEdit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => setShowDetail(false)}
                        className="bg-gray-300 hover:bg-gray-400 px-3 py-1.5 rounded text-sm"
                      >
                        Tutup
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}