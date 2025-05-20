import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

// Data produk sesuai dengan desain
const dataProdukAwal = [
  { 
    produk: 'Penjahitan profesional siap industri Ekspor', 
    harga: '$13 USD', 
    penjualan: { jumlah: '12,000 Sold', persentase: '12%', tren: 'naik' } 
  },
  { 
    produk: 'Penjahitan profesional siap industri Ekspor', 
    harga: '$29 USD', 
    penjualan: { jumlah: '123,234 Sold', persentase: '6%', tren: 'turun' } 
  },
  { 
    produk: 'Penjahitan profesional siap industri Ekspor', 
    harga: '$1,230 USD', 
    penjualan: { jumlah: '198 Sold', persentase: '3%', tren: 'turun' } 
  },
  { 
    produk: 'Penjahitan profesional siap industri Ekspor', 
    harga: '$199 USD', 
    penjualan: { jumlah: '87 Sold', persentase: '63%', tren: 'naik' } 
  },
];

const getTrendIcon = (tren) => {
  return tren === 'naik' 
    ? <span className="text-green-500">↑</span> 
    : <span className="text-red-500">↓</span>;
};

const getTrendColor = (tren) => {
  return tren === 'naik' ? 'text-green-500' : 'text-red-500';
};

export default function AdminKontenPage() {
  const [showForm, setShowForm] = useState(false);
  const [dataProduk, setDataProduk] = useState(dataProdukAwal);
  const [form, setForm] = useState({ 
    produk: '', 
    harga: '', 
    penjualan: { jumlah: '0 Sold', persentase: '0%', tren: 'naik' } 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataProduk([...dataProduk, form]);
    setForm({ 
      produk: '', 
      harga: '', 
      penjualan: { jumlah: '0 Sold', persentase: '0%', tren: 'naik' } 
    });
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Laporan</h2>
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
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Sales</th>
                  <th className="text-left p-2">More</th>
                </tr>
              </thead>
              <tbody>
                {dataProduk.map((produk, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-2">
                      {produk.produk}
                    </td> 
                    <td className="p-2">{produk.harga}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span className={getTrendColor(produk.penjualan.tren)}>
                          {getTrendIcon(produk.penjualan.tren)} {produk.penjualan.persentase}
                        </span>
                        <span>{produk.penjualan.jumlah}</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <button className="text-black-500 hover:text-blue-500 transition-colors">
                        <FaSearch />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Form Tambah Produk */}
          {showForm && (
            <div className="mt-6 bg-white border p-4 rounded shadow-md w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">Tambah Produk Baru</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm">Nama Produk</label>
                  <input 
                    type="text" 
                    value={form.produk} 
                    onChange={(e) => setForm({ ...form, produk: e.target.value })} 
                    className="w-full p-2 border rounded" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm">Harga</label>
                  <input 
                    type="text" 
                    value={form.harga} 
                    onChange={(e) => setForm({ ...form, harga: e.target.value })} 
                    className="w-full p-2 border rounded" 
                    required 
                    placeholder="Contoh: $199 USD"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button 
                    type="button" 
                    onClick={() => setShowForm(false)} 
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Batal
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}