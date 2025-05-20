import React from "react";

const DaftarPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Upload Syarat Pendaftaran
        </h2>

        {/* Baris NIK, Pendidikan, Alamat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* NIK */}
          <div>
            <label htmlFor="nik" className="block font-medium text-gray-700 mb-2">
              Nama
            </label>
            <input
              type="text"
              id="nik"
              placeholder="Masukkan NIK"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nik" className="block font-medium text-gray-700 mb-2">
              No.telp
            </label>
            <input
              type="text"
              id="nik"
              placeholder="Masukkan NIK"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nik" className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="text"
              id="nik"
              placeholder="Masukkan NIK"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nik" className="block font-medium text-gray-700 mb-2">
              NIK
            </label>
            <input
              type="text"
              id="nik"
              placeholder="Masukkan NIK"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pendidikan */}
          <div>
            <label htmlFor="pendidikan" className="block font-medium text-gray-700 mb-2">
              Pendidikan
            </label>
            <select
              id="pendidikan"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Pendidikan</option>
              <option value="SMA">SMA</option>
              <option value="D3">D3</option>
              <option value="S1">S1</option>
            </select>
          </div>

          {/* Alamat */}
          <div>
            <label htmlFor="alamat" className="block font-medium text-gray-700 mb-2">
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              placeholder="Masukkan Alamat"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Upload Dokumen */}
        <div className="space-y-4">
          {/* KTP */}
          <div>
            <label htmlFor="ktp" className="block font-medium text-gray-700 mb-2">
              Unggah KTP
            </label>
            <input
              type="file"
              id="ktp"
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {/* KK */}
          <div>
            <label htmlFor="kk" className="block font-medium text-gray-700 mb-2">
              Unggah KK
            </label>
            <input
              type="file"
              id="kk"
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {/* Ijazah */}
          <div>
            <label htmlFor="ijazah" className="block font-medium text-gray-700 mb-2">
              Unggah Ijazah
            </label>
            <input
              type="file"
              id="ijazah"
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          {/* Pas Photo */}
          <div>
            <label htmlFor="photo" className="block font-medium text-gray-700 mb-2">
              Pas Photo
            </label>
            <input
              type="file"
              id="photo"
              className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            style={{ width:"385px", height:"49px"}}
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaftarPage;
