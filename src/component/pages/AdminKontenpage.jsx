import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes, FaTrashAlt, FaEdit, FaSave, FaCheck, FaTimesCircle, FaUpload, FaChevronDown, FaChevronRight, FaImage, FaInfo, FaBuilding, FaNewspaper, FaCalendarAlt, FaChevronLeft } from 'react-icons/fa';

// Data untuk slideshow dan banner
const dataSlideAwal = [
  { filename: 'Slide1.png', shown: true, description: 'Slide utama untuk halaman home', fileSize: '1.2 MB', uploadDate: '10 Mei 2025', lastModified: '12 Mei 2025' },
  { filename: 'Slide12.png', shown: false, description: 'Promosi pelatihan terbaru', fileSize: '0.8 MB', uploadDate: '5 Mei 2025', lastModified: '5 Mei 2025' },
  { filename: 'Slide21.png', shown: true, description: 'Testimoni peserta pelatihan', fileSize: '1.5 MB', uploadDate: '8 Mei 2025', lastModified: '9 Mei 2025' },
  { filename: 'Slide3.png', shown: true, description: 'Fasilitas workshop', fileSize: '1.1 MB', uploadDate: '15 April 2025', lastModified: '2 Mei 2025' },
  { filename: 'Slide4.png', shown: true, description: 'Program unggulan', fileSize: '1.3 MB', uploadDate: '3 Mei 2025', lastModified: '4 Mei 2025' },
  { filename: 'Slide5.png', shown: false, description: 'Sertifikat kompetensi', fileSize: '0.9 MB', uploadDate: '1 Mei 2025', lastModified: '1 Mei 2025' },
];

const dataBannerAwal = [
  { filename: 'Banner1.jpg', shown: true, description: 'Banner promosi utama', fileSize: '0.9 MB', uploadDate: '20 April 2025', lastModified: '21 April 2025' },
  { filename: 'Banner2.jpg', shown: false, description: 'Banner event mendatang', fileSize: '1.3 MB', uploadDate: '22 April 2025', lastModified: '22 April 2025' },
  { filename: 'Banner3.jpg', shown: true, description: 'Banner diskon pendaftaran', fileSize: '0.7 MB', uploadDate: '25 April 2025', lastModified: '3 Mei 2025' },
  { filename: 'Banner4.jpg', shown: true, description: 'Banner kerjasama industri', fileSize: '1.0 MB', uploadDate: '1 Mei 2025', lastModified: '1 Mei 2025' },
  { filename: 'Banner5.jpg', shown: false, description: 'Banner workshop', fileSize: '1.1 MB', uploadDate: '28 April 2025', lastModified: '30 April 2025' },
  { filename: 'Banner6.jpg', shown: true, description: 'Banner alumni', fileSize: '0.8 MB', uploadDate: '26 April 2025', lastModified: '27 April 2025' },
];

// Data awal untuk Berita
const dataBeritaAwal = [
  { 
    id: 1,
    judul: 'Pembukaan Kelas Baru Jahit Modern', 
    deskripsi: 'BINA ESSA membuka kelas baru untuk pelatihan jahit modern dengan teknik-teknik terkini yang disesuaikan dengan tren fashion masa kini.', 
    gambar: 'berita1.jpg', 
    shown: true, 
    tanggalUpload: '20 Mei 2025',
    fileSize: '0.8 MB'
  },
  { 
    id: 2,
    judul: 'Kerjasama dengan Industri Garmen Terbesar', 
    deskripsi: 'LKP BINA ESSA menjalin kerjasama strategis dengan industri garmen terbesar di Indonesia untuk program magang dan penempatan kerja lulusan.', 
    gambar: 'berita2.jpg', 
    shown: true, 
    tanggalUpload: '18 Mei 2025',
    fileSize: '1.1 MB'
  },
  { 
    id: 3,
    judul: 'Workshop Fashion Design untuk Pemula', 
    deskripsi: 'Workshop khusus fashion design tingkat pemula akan diselenggarakan bulan depan dengan pembicara dari desainer ternama nasional.', 
    gambar: 'berita3.jpg', 
    shown: false, 
    tanggalUpload: '15 Mei 2025',
    fileSize: '0.9 MB'
  },
  { 
    id: 4,
    judul: 'Lulusan BINA ESSA Raih Prestasi Internasional', 
    deskripsi: 'Salah satu lulusan program pelatihan BINA ESSA berhasil meraih juara pertama dalam kompetisi fashion design tingkat ASEAN.', 
    gambar: 'berita4.jpg', 
    shown: true, 
    tanggalUpload: '12 Mei 2025',
    fileSize: '1.3 MB'
  },
  { 
    id: 5,
    judul: 'Pelatihan Batik Modern untuk UMKM', 
    deskripsi: 'Program pelatihan khusus untuk pelaku UMKM dalam bidang batik modern dengan teknik pewarnaan alami dan motif kontemporer.', 
    gambar: 'berita5.jpg', 
    shown: true, 
    tanggalUpload: '10 Mei 2025',
    fileSize: '1.0 MB'
  },
  { 
    id: 6,
    judul: 'Sertifikasi Kompetensi Nasional', 
    deskripsi: 'BINA ESSA menjadi lembaga tersertifikasi untuk menyelenggarakan uji kompetensi nasional bidang fashion dan garmen.', 
    gambar: 'berita6.jpg', 
    shown: false, 
    tanggalUpload: '8 Mei 2025',
    fileSize: '0.7 MB'
  },
];

// Data awal untuk Galeri
const dataGaleriAwal = [
  { 
    id: 1,
    judulFoto: 'Pelatihan Jahit Dasar Batch 15', 
    fileFoto: 'galeri1.jpg', 
    tanggalUpload: '22 Mei 2025',
    fileSize: '1.2 MB'
  },
  { 
    id: 2,
    judulFoto: 'Workshop Fashion Design 2025', 
    fileFoto: 'galeri2.jpg', 
    tanggalUpload: '20 Mei 2025',
    fileSize: '0.9 MB'
  },
  { 
    id: 3,
    judulFoto: 'Kegiatan Praktek di Lab Jahit', 
    fileFoto: 'galeri3.jpg', 
    tanggalUpload: '18 Mei 2025',
    fileSize: '1.5 MB'
  },
  { 
    id: 4,
    judulFoto: 'Wisuda Angkatan 42', 
    fileFoto: 'galeri4.jpg', 
    tanggalUpload: '15 Mei 2025',
    fileSize: '2.1 MB'
  },
  { 
    id: 5,
    judulFoto: 'Kompetisi Fashion Show Internal', 
    fileFoto: 'galeri5.jpg', 
    tanggalUpload: '12 Mei 2025',
    fileSize: '1.8 MB'
  },
  { 
    id: 6,
    judulFoto: 'Kunjungan Industri ke Pabrik Garmen', 
    fileFoto: 'galeri6.jpg', 
    tanggalUpload: '10 Mei 2025',
    fileSize: '1.3 MB'
  },
];

// Data awal untuk Tentang Kami
const dataTentangKamiAwal = {
  "LKP BINA ESSA": {
    title: "Lembaga Kursus dan Pelatihan BINA ESSA",
    logoUrl: "logo-lkp.png",
    description: "Lembaga Kursus dan Pelatihan BINA ESSA adalah lembaga profesional yang fokus pada pelatihan keterampilan jahit dan fashion design."
  },
  "LPK BINA ESSA": {
    title: "Lembaga Pelatihan Kerja BINA ESSA",
    logoUrl: "logo-lpk.png",
    description: "Lembaga Pelatihan Kerja BINA ESSA menyediakan program pelatihan yang dirancang untuk mempersiapkan peserta memasuki dunia kerja industri garmen."
  },
  "BINA ESSA UTAMA": {
    title: "BINA ESSA UTAMA",
    logoUrl: "logo-beu.png",
    description: "BINA ESSA UTAMA adalah unit bisnis yang fokus pada produksi garmen dan fashion item berkualitas ekspor."
  }
};

// Komponen Pagination
const Pagination = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage, searchTerm, onSearchChange }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 p-4 bg-gray-50 rounded">
      <div className="flex items-center gap-2">
        <FaSearch className="text-gray-400" size={14} />
        <input
          type="text"
          placeholder="Cari data..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="px-3 py-1 border rounded text-sm w-48"
        />
      </div>
      
      <div className="text-sm text-gray-600">
        Menampilkan {startItem}-{endItem} dari {totalItems} data
      </div>
      
      {totalPages > 1 && (
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <FaChevronLeft size={12} />
          </button>
          
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
              className={`px-3 py-1 border rounded text-sm ${
                page === currentPage 
                  ? 'bg-blue-500 text-white' 
                  : page === '...' 
                    ? 'cursor-default' 
                    : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      )}
    </div>
  );
};

// Komponen khusus untuk mengelola galeri
const GaleriSection = ({ data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;
  
  const [form, setForm] = useState({ 
    judulFoto: '', 
    fileFoto: '',
    tanggalUpload: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    fileSize: ''
  });

  // Filter data berdasarkan search term
  const filteredData = data.filter(item =>
    item.judulFoto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.fileFoto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetail = (item) => {
    setSelectedItem({...item});
    setEditedItem({...item});
    setShowDetail(true);
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus foto galeri ini?')) {
      const newData = data.filter(item => item.id !== id);
      setData(newData);
      setShowDetail(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedItem({...selectedItem});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = data.findIndex(item => item.id === selectedItem.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = {...editedItem};
      setData(newData);
      setSelectedItem({...editedItem});
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedItem({...editedItem, [field]: value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setForm({
        ...form,
        fileFoto: file.name
      });
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Silakan pilih file foto terlebih dahulu');
      return;
    }
    
    if (!form.judulFoto.trim()) {
      alert('Judul foto harus diisi');
      return;
    }
    
    const fileSizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    const newItem = {
      ...form,
      id: Math.max(...data.map(item => item.id)) + 1,
      fileFoto: selectedFile.name,
      fileSize: fileSizeInMB
    };
    
    setData([...data, newItem]);
    setForm({ 
      judulFoto: '', 
      fileFoto: '',
      tanggalUpload: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      fileSize: ''
    });
    setSelectedFile(null);
    setShowForm(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset ke halaman pertama saat search
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Galeri Foto</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-1 text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 flex items-center gap-1"
        >
          <FaPlus size={12} /> Tambah Foto
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 w-16">No</th>
              <th className="px-4 py-2">Judul Foto</th>
              <th className="px-4 py-2">File Foto</th>
              <th className="px-4 py-2">Tanggal Upload</th>
              <th className="px-4 py-2 text-center">More</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{startIndex + idx + 1}</td>
                <td className="px-4 py-2">
                  <p className="font-medium">{item.judulFoto}</p>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <FaImage className="text-gray-400" size={14} />
                    <span>{item.fileFoto}</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaCalendarAlt size={12} />
                    {item.tanggalUpload}
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                  <button 
                    onClick={() => handleViewDetail(item)}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaSearch />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Form Tambah Foto Galeri */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold">Tambah Foto Galeri</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-1">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Foto</label>
                  <input 
                    type="text" 
                    value={form.judulFoto}
                    onChange={(e) => setForm({...form, judulFoto: e.target.value})}
                    className="w-full p-2 border rounded text-sm"
                    placeholder="Masukkan judul foto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">File Foto</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="galeri-file-upload"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="galeri-file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <FaUpload className="text-gray-400" size={20} />
                        <span className="text-sm text-gray-500">
                          {selectedFile ? selectedFile.name : "Pilih foto"}
                        </span>
                        <span className="text-xs text-gray-400">
                          PNG atau JPG
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Upload</label>
                  <input 
                    type="text" 
                    value={form.tanggalUpload}
                    readOnly
                    className="w-full p-2 border rounded text-sm bg-gray-100"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm"
              >
                Simpan Foto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetail && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold">Detail Foto Galeri</h3>
              <button 
                onClick={() => setShowDetail(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="space-y-3 mb-4 max-h-80 overflow-y-auto pr-1">
              <div>
                <p className="text-sm font-medium text-gray-700">Judul Foto</p>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={editedItem.judulFoto}
                    onChange={(e) => handleInputChange('judulFoto', e.target.value)}
                    className="w-full p-2 border rounded mt-1 text-sm"
                  />
                ) : (
                  <p className="font-medium text-sm mt-1">{selectedItem.judulFoto}</p>
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">File Foto</p>
                <div className="mt-1 p-3 bg-gray-50 rounded flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <FaImage className="text-gray-400" />
                    <span className="text-sm">{selectedItem.fileFoto}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Ukuran File</p>
                  <p className="text-sm mt-1">{selectedItem.fileSize}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Tanggal Upload</p>
                  <p className="text-sm mt-1">{selectedItem.tanggalUpload}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaSave size={12} /> Simpan
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleDelete(selectedItem.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaTrashAlt size={12} /> Hapus
                  </button>
                  <button
                    onClick={handleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaEdit size={12} /> Edit
                  </button>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
                  >
                    Tutup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Komponen khusus untuk mengelola berita (Updated dengan Pagination)
const BeritaSection = ({ data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;
  
  const [form, setForm] = useState({ 
    judul: '', 
    deskripsi: '',
    gambar: '',
    shown: true, 
    tanggalUpload: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    fileSize: ''
  });

  // Filter data berdasarkan search term
  const filteredData = data.filter(item =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetail = (item) => {
    setSelectedItem({...item});
    setEditedItem({...item});
    setShowDetail(true);
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      const newData = data.filter(item => item.id !== id);
      setData(newData);
      setShowDetail(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedItem({...selectedItem});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = data.findIndex(item => item.id === selectedItem.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = {...editedItem};
      setData(newData);
      setSelectedItem({...editedItem});
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedItem({...editedItem, [field]: value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setForm({
        ...form,
        gambar: file.name
      });
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Silakan pilih gambar berita terlebih dahulu');
      return;
    }
    
    if (!form.judul.trim() || !form.deskripsi.trim()) {
      alert('Judul dan deskripsi berita harus diisi');
      return;
    }
    
    const fileSizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    const newItem = {
      ...form,
      id: Math.max(...data.map(item => item.id)) + 1,
      gambar: selectedFile.name,
      fileSize: fileSizeInMB
    };
    
    setData([...data, newItem]);
    setForm({ 
      judul: '', 
      deskripsi: '',
      gambar: '',
      shown: true, 
      tanggalUpload: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      fileSize: ''
    });
    setSelectedFile(null);
    setShowForm(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Berita</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-1 text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 flex items-center gap-1"
        >
          <FaPlus size={12} /> Tambah Berita
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">Judul Berita</th>
              <th className="px-4 py-2">Tanggal Upload</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-center">More</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">
                  <div>
                    <p className="font-medium">{item.judul}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.deskripsi.substring(0, 80)}...</p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaCalendarAlt size={12} />
                    {item.tanggalUpload}
                  </div>
                </td>
                <td className="px-4 py-2">
                  {item.shown ? 
                    <span className="text-green-500 flex items-center gap-1">
                      <FaCheck size={12} /> Ditampilkan
                    </span> : 
                    <span className="text-red-500 flex items-center gap-1">
                      <FaTimesCircle size={12} /> Tidak Ditampilkan
                    </span>
                  }
                </td>
                <td className="px-4 py-2 text-center">
                  <button 
                    onClick={() => handleViewDetail(item)}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaSearch />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Form Tambah Berita */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold">Tambah Berita Baru</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-1">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Berita</label>
                  <input 
                    type="text" 
                    value={form.judul}
                    onChange={(e) => setForm({...form, judul: e.target.value})}
                    className="w-full p-2 border rounded text-sm"
                    placeholder="Masukkan judul berita"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                  <textarea 
                    value={form.deskripsi}
                    onChange={(e) => setForm({...form, deskripsi: e.target.value})}
                    className="w-full p-2 border rounded text-sm"
                    rows="4"
                    placeholder="Masukkan deskripsi berita"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Berita</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="berita-file-upload"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="berita-file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <FaUpload className="text-gray-400" size={20} />
                        <span className="text-sm text-gray-500">
                          {selectedFile ? selectedFile.name : "Pilih gambar berita"}
                        </span>
                        <span className="text-xs text-gray-400">
                          PNG atau JPG
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status Tampilan</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        checked={form.shown}
                        onChange={() => setForm({...form, shown: true})}
                        className="mr-2"
                      />
                      Ditampilkan
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        checked={!form.shown}
                        onChange={() => setForm({...form, shown: false})}
                        className="mr-2"
                      />
                      Tidak Ditampilkan
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Upload</label>
                  <input 
                    type="text" 
                    value={form.tanggalUpload}
                    readOnly
                    className="w-full p-2 border rounded text-sm bg-gray-100"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm"
              >
                Simpan Berita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetail && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold">Detail Berita</h3>
              <button 
                onClick={() => setShowDetail(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="space-y-3 mb-4 max-h-80 overflow-y-auto pr-1">
              <div>
                <p className="text-sm font-medium text-gray-700">Judul Berita</p>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={editedItem.judul}
                    onChange={(e) => handleInputChange('judul', e.target.value)}
                    className="w-full p-2 border rounded mt-1 text-sm"
                  />
                ) : (
                  <p className="font-medium text-sm mt-1">{selectedItem.judul}</p>
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">Deskripsi</p>
                {isEditing ? (
                  <textarea 
                    value={editedItem.deskripsi}
                    onChange={(e) => handleInputChange('deskripsi', e.target.value)}
                    className="w-full p-2 border rounded mt-1 text-sm"
                    rows="4"
                  />
                ) : (
                  <p className="text-sm mt-1 text-gray-600">{selectedItem.deskripsi}</p>
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">Gambar</p>
                <div className="mt-1 p-3 bg-gray-50 rounded flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <FaImage className="text-gray-400" />
                    <span className="text-sm">{selectedItem.gambar}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700">Status Tampilan</p>
                {isEditing ? (
                  <div className="flex items-center space-x-4 mt-1">
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        checked={editedItem.shown}
                        onChange={() => handleInputChange('shown', true)}
                        className="mr-2"
                      />
                      Ditampilkan
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        checked={!editedItem.shown}
                        onChange={() => handleInputChange('shown', false)}
                        className="mr-2"
                      />
                      Tidak Ditampilkan
                    </label>
                  </div>
                ) : (
                  <p className="mt-1">
                    {selectedItem.shown ? 
                      <span className="text-green-500 flex items-center gap-1 text-sm">
                        <FaCheck size={12} /> Ditampilkan
                      </span> : 
                      <span className="text-red-500 flex items-center gap-1 text-sm">
                        <FaTimesCircle size={12} /> Tidak Ditampilkan
                      </span>
                    }
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Ukuran File</p>
                  <p className="text-sm mt-1">{selectedItem.fileSize}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Tanggal Upload</p>
                  <p className="text-sm mt-1">{selectedItem.tanggalUpload}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaSave size={12} /> Simpan
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleDelete(selectedItem.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaTrashAlt size={12} /> Hapus
                  </button>
                  <button
                    onClick={handleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded inline-flex items-center gap-1 text-sm"
                  >
                    <FaEdit size={12} /> Edit
                  </button>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded text-sm"
                  >
                    Tutup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Komponen untuk mengelola tabel slideshow dan banner (Updated dengan Pagination)
const TableSection = ({ title, data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;
  
  const [form, setForm] = useState({ 
    filename: '', 
    shown: true, 
    description: '',
    fileSize: '',
    uploadDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    lastModified: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  });

  // Filter data berdasarkan search term
  const filteredData = data.filter(item =>
    item.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetail = (item) => {
    setSelectedItem({...item});
    setEditedItem({...item});
    setShowDetail(true);
    setIsEditing(false);
  };

  const handleDelete = (index) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus ${title.toLowerCase()} ini?`)) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
      setShowDetail(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedItem({...selectedItem});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = data.findIndex(item => item.filename === selectedItem.filename);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = {...editedItem};
      setData(newData);
      setSelectedItem({...editedItem});
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedItem({...editedItem, [field]: value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setForm({
        ...form,
        filename: file.name
      });
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Silakan pilih file terlebih dahulu');
      return;
    }
    
    if (!form.description.trim()) {
      alert('Deskripsi harus diisi');
      return;
    }
    
    const fileSizeInMB = (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    const newItem = {
      ...form,
      filename: selectedFile.name,
      fileSize: fileSizeInMB
    };
    
    setData([...data, newItem]);
    setForm({ 
      filename: '', 
      shown: true, 
      description: '',
      fileSize: '',
      uploadDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      lastModified: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    setSelectedFile(null);
    setShowForm(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
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
              <th className="px-4 py-2">Nama File Gambar</th>
              <th className="px-4 py-2">Ditampilkan</th>
              <th className="px-4 py-2 text-center">More</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.filename}</td>
                <td className="px-4 py-2">
                  {item.shown ? 
                    <span className="text-green-500 flex items-center gap-1">
                      <FaCheck size={12} /> Ya
                    </span> : 
                    <span className="text-red-500 flex items-center gap-1">
                      <FaTimesCircle size={12} /> Tidak
                    </span>
                  }
                </td>
                <td className="px-4 py-2 text-center">
                  <button 
                    onClick={() => handleViewDetail(item)}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaSearch />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Form Tambah Data dengan File Upload */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-sm mx-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Tambah {title}</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="max-h-80 overflow-y-auto pr-1">
              <div className="space-y-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id={`file-upload-${title}`}
                    accept={title === 'Slideshow' ? '.png,.jpg,.jpeg,.gif' : '.jpg,.jpeg,.png'}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor={`file-upload-${title}`} className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FaUpload className="text-gray-400" size={20} />
                      <span className="text-sm text-gray-500">
                        {selectedFile ? selectedFile.name : `Pilih file untuk ${title.toLowerCase()}`}
                      </span>
                      <span className="text-xs text-gray-400">
                        {title === 'Slideshow' ? 'PNG, JPG, atau GIF' : 'JPG atau PNG'}
                      </span>
                    </div>
                  </label>
                </div>
                
                <div>
                  <label className="block text-xs text-gray-500">Deskripsi</label>
                  <textarea 
                    value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    className="w-full p-1 border rounded mt-0.5 text-xs"
                    rows="2"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Status Tampilan</label>
                  <div className="flex items-center space-x-4 mt-0.5">
                    <label className="flex items-center text-xs">
                      <input
                        type="radio"
                        checked={form.shown}
                        onChange={() => setForm({...form, shown: true})}
                        className="mr-1"
                      />
                      Ditampilkan
                    </label>
                    <label className="flex items-center text-xs">
                      <input
                        type="radio"
                        checked={!form.shown}
                        onChange={() => setForm({...form, shown: false})}
                        className="mr-1"
                      />
                      Tidak Ditampilkan
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Tanggal Upload</label>
                  <input 
                    type="text" 
                    value={form.uploadDate}
                    readOnly
                    className="w-full p-1 border rounded mt-0.5 text-xs bg-gray-100"
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
      {showDetail && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-sm mx-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">Detail {title}</h3>
              <button 
                onClick={() => setShowDetail(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={14} />
              </button>
            </div>
            
            <div className="space-y-2 mb-3 max-h-72 overflow-y-auto pr-1">
              <div>
                <p className="text-xs text-gray-500">Nama File</p>
                <p className="font-medium text-sm">{selectedItem.filename}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Deskripsi</p>
                {isEditing ? (
                  <textarea 
                    value={editedItem.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full p-1 border rounded mt-0.5 text-xs"
                    rows="2"
                  />
                ) : (
                  <p className="font-medium text-sm">{selectedItem.description}</p>
                )}
              </div>
              <div>
                <p className="text-xs text-gray-500">Status Tampilan</p>
                {isEditing ? (
                  <div className="flex items-center space-x-4 mt-0.5">
                    <label className="flex items-center text-xs">
                      <input
                        type="radio"
                        checked={editedItem.shown}
                        onChange={() => handleInputChange('shown', true)}
                        className="mr-1"
                      />
                      Ditampilkan
                    </label>
                    <label className="flex items-center text-xs">
                      <input
                        type="radio"
                        checked={!editedItem.shown}
                        onChange={() => handleInputChange('shown', false)}
                        className="mr-1"
                      />
                      Tidak Ditampilkan
                    </label>
                  </div>
                ) : (
                  <p className="font-medium text-sm">
                    {selectedItem.shown ? 
                      <span className="text-green-500 flex items-center gap-1">
                        <FaCheck size={12} /> Ditampilkan
                      </span> : 
                      <span className="text-red-500 flex items-center gap-1">
                        <FaTimesCircle size={12} /> Tidak Ditampilkan
                      </span>
                    }
                  </p>
                )}
              </div>
              <div>
                <p className="text-xs text-gray-500">Ukuran File</p>
                <p className="font-medium text-sm">{selectedItem.fileSize}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tanggal Upload</p>
                <p className="font-medium text-sm">{selectedItem.uploadDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Terakhir Diubah</p>
                <p className="font-medium text-sm">{selectedItem.lastModified}</p>
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
                      const index = data.findIndex(item => item.filename === selectedItem.filename);
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
    </div>
  );
};

// Komponen untuk mengelola informasi Tentang Kami
const TentangKamiEditor = ({ data, setData, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({...data});
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedData({...data});
    setIsEditing(false);
    setSelectedLogo(null);
  };

  const handleSave = () => {
    setData(editedData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedData({...editedData, [field]: value});
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedLogo(file);
      setEditedData({...editedData, logoUrl: file.name});
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{type}</h2>
        {!isEditing ? (
          <button 
            onClick={handleEdit}
            className="px-4 py-1 text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 flex items-center gap-1"
          >
            <FaEdit size={12} /> Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 rounded"
            >
              Batal
            </button>
            <button 
              onClick={handleSave}
              className="px-3 py-1 text-sm bg-green-500 text-white hover:bg-green-600 rounded flex items-center gap-1"
            >
              <FaSave size={12} /> Simpan
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
            {isEditing ? (
              <input 
                type="text" 
                value={editedData.title} 
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="text-lg font-semibold">{data.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            {isEditing ? (
              <textarea 
                value={editedData.description} 
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full p-2 border rounded"
                rows="6"
              />
            ) : (
              <p className="text-sm text-gray-600">{data.description}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
          <div className="border rounded p-4 flex flex-col items-center justify-center">
            {isEditing ? (
              <div className="w-full">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer mb-2">
                  <input
                    type="file"
                    id={`logo-upload-${type}`}
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                  <label htmlFor={`logo-upload-${type}`} className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FaUpload className="text-gray-400" size={20} />
                      <span className="text-sm text-gray-500">
                        {selectedLogo ? selectedLogo.name : "Pilih file logo"}
                      </span>
                      <span className="text-xs text-gray-400">
                        PNG, JPG, atau SVG
                      </span>
                    </div>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Logo saat ini:</span>
                  <span className="text-sm font-medium">{editedData.logoUrl}</span>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <FaImage className="text-gray-400" size={40} />
                </div>
                <p className="text-sm text-gray-500">{data.logoUrl}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen utama untuk Kelola Informasi
const KelolaInformasi = () => {
  const [slideshowData, setSlideshowData] = useState(dataSlideAwal);
  const [bannerData, setBannerData] = useState(dataBannerAwal);
  const [beritaData, setBeritaData] = useState(dataBeritaAwal);
  const [galeriData, setGaleriData] = useState(dataGaleriAwal);
  const [tentangKamiData, setTentangKamiData] = useState(dataTentangKamiAwal);
  
  // State untuk mengelola tampilan yang aktif
  const [activeSection, setActiveSection] = useState(null);
  const [activeTentangKami, setActiveTentangKami] = useState(null);

  // Fungsi untuk toggle tampilan section
  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      // Reset sub-section jika beralih dari Tentang Kami
      if (section !== 'tentangKami') {
        setActiveTentangKami(null);
      }
    }
  };

  // Fungsi untuk toggle tampilan sub-section Tentang Kami
  const toggleTentangKami = (section) => {
    if (activeTentangKami === section) {
      setActiveTentangKami(null);
    } else {
      setActiveTentangKami(section);
    }
  };

  // Update data untuk entitas Tentang Kami tertentu
  const updateTentangKamiData = (type, newData) => {
    setTentangKamiData({
      ...tentangKamiData,
      [type]: newData
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Kelola Informasi</h1>
      
      {/* Kotak-kotak menu utama */}
      <div className="space-y-4">
        {/* Slideshow */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('slideshow')}
            className="w-full p-4 text-left flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center">
              <FaImage className="text-blue-500 mr-2" />
              <span className="font-medium">Slideshow</span>
            </div>
            {activeSection === 'slideshow' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          
          {activeSection === 'slideshow' && (
            <div className="p-4">
              <TableSection title="Slideshow" data={slideshowData} setData={setSlideshowData} />
            </div>
          )}
        </div>
        
        {/* Banner */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('banner')}
            className="w-full p-4 text-left flex items-center justify-between bg-green-50 hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center">
              <FaImage className="text-green-500 mr-2" />
              <span className="font-medium">Banner</span>
            </div>
            {activeSection === 'banner' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          
          {activeSection === 'banner' && (
            <div className="p-4">
              <TableSection title="Banner" data={bannerData} setData={setBannerData} />
            </div>
          )}
        </div>

        {/* Berita */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('berita')}
            className="w-full p-4 text-left flex items-center justify-between bg-orange-50 hover:bg-orange-100 transition-colors"
          >
            <div className="flex items-center">
              <FaNewspaper className="text-orange-500 mr-2" />
              <span className="font-medium">Berita</span>
            </div>
            {activeSection === 'berita' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          
          {activeSection === 'berita' && (
            <div className="p-4">
              <BeritaSection data={beritaData} setData={setBeritaData} />
            </div>
          )}
        </div>

        {/* Galeri - SECTION BARU TERPISAH */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('galeri')}
            className="w-full p-4 text-left flex items-center justify-between bg-pink-50 hover:bg-pink-100 transition-colors"
          >
            <div className="flex items-center">
              <FaImage className="text-pink-500 mr-2" />
              <span className="font-medium">Galeri Foto</span>
            </div>
            {activeSection === 'galeri' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          
          {activeSection === 'galeri' && (
            <div className="p-4">
              <GaleriSection data={galeriData} setData={setGaleriData} />
            </div>
          )}
        </div>
        
        {/* Informasi Tentang Kami */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <button 
            onClick={() => toggleSection('tentangKami')}
            className="w-full p-4 text-left flex items-center justify-between bg-purple-50 hover:bg-purple-100 transition-colors"
          >
            <div className="flex items-center">
              <FaInfo className="text-purple-500 mr-2" />
              <span className="font-medium">Informasi Tentang Kami</span>
            </div>
            {activeSection === 'tentangKami' ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          
          {activeSection === 'tentangKami' && (
            <div className="p-4">
              {/* Sub-menu Tentang Kami */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* LKP BINA ESSA */}
                <div className="bg-white border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleTentangKami('LKP BINA ESSA')}
                    className={`w-full p-3 text-left flex items-center justify-between transition-colors
                              ${activeTentangKami === 'LKP BINA ESSA' ? 'bg-blue-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center">
                      <FaBuilding className="text-blue-500 mr-2" />
                      <span className="font-medium">LKP BINA ESSA</span>
                    </div>
                    {activeTentangKami === 'LKP BINA ESSA' ? <FaChevronDown /> : <FaChevronRight />}
                  </button>
                </div>
                
                {/* LPK BINA ESSA */}
                <div className="bg-white border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleTentangKami('LPK BINA ESSA')}
                    className={`w-full p-3 text-left flex items-center justify-between transition-colors
                              ${activeTentangKami === 'LPK BINA ESSA' ? 'bg-green-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center">
                      <FaBuilding className="text-green-500 mr-2" />
                      <span className="font-medium">LPK BINA ESSA</span>
                    </div>
                    {activeTentangKami === 'LPK BINA ESSA' ? <FaChevronDown /> : <FaChevronRight />}
                  </button>
                </div>
                
                {/* BINA ESSA UTAMA */}
                <div className="bg-white border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleTentangKami('BINA ESSA UTAMA')}
                    className={`w-full p-3 text-left flex items-center justify-between transition-colors
                              ${activeTentangKami === 'BINA ESSA UTAMA' ? 'bg-orange-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center">
                      <FaBuilding className="text-orange-500 mr-2" />
                      <span className="font-medium">YAYASAN BINA ESSA</span>
                    </div>
                    {activeTentangKami === 'BINA ESSA UTAMA' ? <FaChevronDown /> : <FaChevronRight />}
                  </button>
                </div>
              </div>
              
              {/* Tampilkan editor untuk entitas Tentang Kami yang dipilih */}
              {activeTentangKami && (
                <TentangKamiEditor 
                  data={tentangKamiData[activeTentangKami]} 
                  setData={(newData) => updateTentangKamiData(activeTentangKami, newData)}
                  type={activeTentangKami}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KelolaInformasi;