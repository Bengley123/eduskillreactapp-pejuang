import React, { useState } from 'react';
import Typography from '../Elements/AdminSource/Typhography';
import PaginatedDataTable from '../Fragments/PaginationDataTable';
import DetailModal from '../Fragments/DetailModal';
import { FaSearch } from 'react-icons/fa';

// Mock data peserta dengan pesan feedback dan tanggal feedback
const dataFeedback = [
  { id: 1, nama: 'Budi Belus', status: 'Ditinjau', pesan: 'Peserta perlu peningkatan dalam teknik menjahit.', email: 'budi.belus@gmail.com', tanggalFeedback: '2025-05-10' },
  { id: 2, nama: 'David Dagu', status: 'Ditampilkan', pesan: 'Terlihat kemajuan signifikan di setiap sesi.', email: 'david.dagu@gmail.com', tanggalFeedback: '2025-05-11' },
  { id: 3, nama: 'Ujang Kijang', status: 'Tidak Ditampilkan', pesan: 'Sering terlambat dan kurang disiplin.', email: 'ujang.kijang@gmail.com', tanggalFeedback: '2025-05-12' },
  { id: 4, nama: 'Deddy Botak', status: 'Ditinjau', pesan: 'Perlu pendampingan lebih lanjut dalam penggunaan mesin jahit.', email: 'deddy.botak@gmail.com', tanggalFeedback: '2025-05-13' },
  { id: 5, nama: 'Siti Aminah', status: 'Ditampilkan', pesan: 'Hasil karya cukup memuaskan dan tepat waktu.', email: 'siti.aminah@gmail.com', tanggalFeedback: '2025-05-14' },
  { id: 6, nama: 'Agus Salim', status: 'Tidak Ditampilkan', pesan: 'Perlu perbaikan sikap dan kehadiran.', email: 'agus.salim@gmail.com', tanggalFeedback: '2025-05-15' },
  { id: 7, nama: 'Maya Sari', status: 'Ditinjau', pesan: 'Potensi bagus, perlu bimbingan ekstra.', email: 'maya.sari@gmail.com', tanggalFeedback: '2025-05-16' }
];

const FeedbackPage = () => {
  const [dataPeserta, setDataPeserta] = useState(dataFeedback);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeserta, setSelectedPeserta] = useState(null);
  const [editedPeserta, setEditedPeserta] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const itemsPerPage = 5;

  const statusColors = {
    'Ditinjau': 'text-yellow-500 font-semibold',
    'Ditampilkan': 'text-green-600 font-semibold',
    'Tidak Ditampilkan': 'text-red-600 font-semibold',
  };

  const columns = [
    { 
      key: 'index', 
      header: 'No',
      render: (value, row, index) => (currentPage - 1) * itemsPerPage + index + 1
    },
    { key: 'nama', header: 'Nama' },
    { 
      key: 'pesan', 
      header: 'Feedback',
      render: (pesan) => (
        <div className='max-w-xs truncate' title={pesan}>{pesan}</div>
      )
    },
    { key: 'tanggalFeedback', header: 'Tanggal Feedback' },
    { 
      key: 'status', 
      header: 'Status',
      render: (status) => (
        <span className={statusColors[status] || ''}>
          {status}
        </span>
      )
    },
  ];

  const modalFields = [
    { key: 'nama', label: 'Nama Lengkap', type: 'text', readonly: true },
    { key: 'email', label: 'Email', type: 'email', readonly: true },
    { key: 'tanggalFeedback', label: 'Tanggal Feedback', type: 'text', readonly: true },
    { 
      key: 'status', 
      label: 'Status', 
      type: 'select',
      options: [
        { value: 'Ditinjau', label: 'Ditinjau' },
        { value: 'Ditampilkan', label: 'Ditampilkan' },
        { value: 'Tidak Ditampilkan', label: 'Tidak Ditampilkan' },
      ]
    },
    {
      key: 'pesan',
      label: 'Pesan Feedback',
      type: 'textarea',
      readonly: true,
    }
  ];

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowAction = (row) => {
    handleViewDetail(row);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = dataPeserta.filter(p =>
    p.nama.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterStatus === '' || p.status === filterStatus)
  );

  return (
    <div>
      <Typography variant="h2" className="mb-6">
        Kelola Feedback
      </Typography>

      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 mb-4">
        {/* <h3 className="text-xl font-semibold">Daftar Peserta</h3> */}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
          <select
            className="px-2 py-2 border rounded-md w-full sm:w-52"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <option value="">Semua Status</option>
            <option value="Ditinjau">Ditinjau</option>
            <option value="Ditampilkan">Ditampilkan</option>
            <option value="Tidak Ditampilkan">Tidak Ditampilkan</option>
          </select>
          <input
            type="text"
            placeholder="Cari nama peserta..."
            className="px-3 py-2 border rounded-md w-full sm:w-60"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <PaginatedDataTable 
        title=""
        columns={columns}
        data={filteredData}
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
        fields={modalFields}
      />
    </div>
  );
};

export default FeedbackPage;
