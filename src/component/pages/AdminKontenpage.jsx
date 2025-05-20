import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes, FaTrashAlt, FaEdit, FaSave, FaCheck, FaTimesCircle, FaUpload, FaChevronDown, FaChevronRight, FaImage, FaInfo, FaBuilding } from 'react-icons/fa';

// Data untuk slideshow dan banner
const dataSlideAwal = [
  { filename: 'Slide1.png', shown: true, description: 'Slide utama untuk halaman home', fileSize: '1.2 MB', uploadDate: '10 Mei 2025', lastModified: '12 Mei 2025' },
  { filename: 'Slide12.png', shown: false, description: 'Promosi pelatihan terbaru', fileSize: '0.8 MB', uploadDate: '5 Mei 2025', lastModified: '5 Mei 2025' },
  { filename: 'Slide21.png', shown: true, description: 'Testimoni peserta pelatihan', fileSize: '1.5 MB', uploadDate: '8 Mei 2025', lastModified: '9 Mei 2025' },
  { filename: 'Slide3.png', shown: true, description: 'Fasilitas workshop', fileSize: '1.1 MB', uploadDate: '15 April 2025', lastModified: '2 Mei 2025' },
];

const dataBannerAwal = [
  { filename: 'Banner1.jpg', shown: true, description: 'Banner promosi utama', fileSize: '0.9 MB', uploadDate: '20 April 2025', lastModified: '21 April 2025' },
  { filename: 'Banner2.jpg', shown: false, description: 'Banner event mendatang', fileSize: '1.3 MB', uploadDate: '22 April 2025', lastModified: '22 April 2025' },
  { filename: 'Banner3.jpg', shown: true, description: 'Banner diskon pendaftaran', fileSize: '0.7 MB', uploadDate: '25 April 2025', lastModified: '3 Mei 2025' },
  { filename: 'Banner4.jpg', shown: true, description: 'Banner kerjasama industri', fileSize: '1.0 MB', uploadDate: '1 Mei 2025', lastModified: '1 Mei 2025' },
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

// Komponen untuk mengelola tabel slideshow dan banner
const TableSection = ({ title, data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState({ 
    filename: '', 
    shown: true, 
    description: '',
    fileSize: '',
    uploadDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    lastModified: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  });

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
      // Update form dengan nama file yang dipilih
      setForm({
        ...form,
        filename: file.name
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert('Silakan pilih file terlebih dahulu');
      return;
    }
    
    // Hitung file size dengan format yang benar
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
            {data.map((item, idx) => (
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
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id={`file-upload-${title}`}
                    accept={title === 'Slideshow' ? '.png,.jpg,.jpeg,.gif' : '.jpg,.jpeg,.png'}
                    onChange={handleFileChange}
                    className="hidden"
                    required
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
                    required
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