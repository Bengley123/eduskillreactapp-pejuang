import React, { useState } from 'react';
import Typography from '../Elements/AdminSource/Typhography';
import PaginatedDataTable from '../Fragments/PaginationDataTable';
import DetailModal from '../Fragments/DetailModal';
import DocumentLink from '../Moleculs/AdminSource/DocumentLink';
import Icon from '../Elements/AdminSource/Icon';
import { FaSearch } from 'react-icons/fa';

// Mock data peserta
const dataPesertaAwal = [
  { 
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

const PesertaPage = () => {
  const [dataPeserta, setDataPeserta] = useState(dataPesertaAwal);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeserta, setSelectedPeserta] = useState(null);
  const [editedPeserta, setEditedPeserta] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const itemsPerPage = 5;

  // Table columns configuration
  const columns = [
    { 
      key: 'index', 
      header: 'No',
      render: (value, row, index) => (currentPage - 1) * itemsPerPage + index + 1
    },
    { key: 'nama', header: 'Nama' },
    { key: 'pelatihan', header: 'Pelatihan' },
    { 
      key: 'ktp', 
      header: 'KTP',
      render: (filename) => <DocumentLink filename={filename} />
    },
    { 
      key: 'kk', 
      header: 'KK',
      render: (filename) => <DocumentLink filename={filename} />
    },
    { 
      key: 'pasPhoto', 
      header: 'Pas Photo',
      render: (filename) => <DocumentLink filename={filename} />
    },
    { 
      key: 'ijazah', 
      header: 'Ijazah',
      render: (filename) => <DocumentLink filename={filename} />
    }
  ];

  // Modal fields configuration
  const modalFields = [
    { key: 'nama', label: 'Nama Lengkap', type: 'text' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'telepon', label: 'Telepon', type: 'text' },
    { key: 'alamat', label: 'Alamat', type: 'textarea' },
    { key: 'pelatihan', label: 'Pelatihan', type: 'text' },
    { key: 'tanggalDaftar', label: 'Tanggal Daftar', type: 'text', readonly: true },
    { 
      key: 'status', 
      label: 'Status', 
      type: 'select',
      options: [
        { value: 'Ditinjau', label: 'Ditinjau' },
        { value: 'Diterima', label: 'Diterima' },
        { value: 'Ditolak', label: 'Ditolak' }
      ]
    },
    { key: 'ktp', label: 'KTP', type: 'file', accept: '.pdf' },
    { key: 'kk', label: 'KK', type: 'file', accept: '.pdf' },
    { key: 'pasPhoto', label: 'Pas Photo', type: 'file', accept: 'image/*' },
    { key: 'ijazah', label: 'Ijazah', type: 'file', accept: '.pdf' }
  ];

  // Event handlers
  const handleViewDetail = (peserta) => {
    setSelectedPeserta(peserta);
    setEditedPeserta({...peserta});
    setShowDetail(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedPeserta({...selectedPeserta});
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const index = dataPeserta.findIndex(p => p.id === selectedPeserta.id);
    if (index !== -1) {
      const newData = [...dataPeserta];
      newData[index] = {...editedPeserta};
      setDataPeserta(newData);
      setSelectedPeserta({...editedPeserta});
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus peserta ini?')) {
      const newData = dataPeserta.filter(p => p.id !== selectedPeserta.id);
      setDataPeserta(newData);
      
      // Adjust current page if necessary
      const newTotalPages = Math.ceil(newData.length / itemsPerPage);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
      
      setShowDetail(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedPeserta({...editedPeserta, [field]: value});
  };

  const handleFileChange = (field, e) => {
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

  const handleRowAction = (row) => {
    handleViewDetail(row);
  };

  return (
    <div>
      <Typography variant="h2" className="mb-6">
        Peserta
      </Typography>
      
      <PaginatedDataTable 
        title="Daftar Peserta"
        columns={columns}
        data={dataPeserta}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        hasActions={true}
        onRowAction={handleRowAction}
        actionIcon={FaSearch}
      />

      <DetailModal 
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        title="Detail Peserta"
        data={selectedPeserta}
        isEditing={isEditing}
        editedData={editedPeserta}
        onEdit={handleEdit}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
        onDelete={handleDelete}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}
        fields={modalFields}
      />
    </div>
  );
};

export default PesertaPage;