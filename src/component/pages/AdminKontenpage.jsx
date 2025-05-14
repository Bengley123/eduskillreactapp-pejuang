import { FaSearch } from 'react-icons/fa';

const TableSection = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">+ Tambah</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
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
                <td className="px-4 py-2">{item.shown ? 'True' : 'False'}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaSearch />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SlideshowBannerContent = () => {
  // Contoh data dummy
  const slideshowData = [
    { filename: 'Slide1.png', shown: true },
    { filename: 'Slide12.png', shown: false },
    { filename: 'Slide21.png', shown: true },
    { filename: 'Slide3.png', shown: true },
  ];

  const bannerData = [...slideshowData]; // Jika data sama

  return (
    <div className="p-6">
      <TableSection title="Slideshow" data={slideshowData} />
      <TableSection title="Banner" data={bannerData} />
    </div>
  );
};

export default SlideshowBannerContent;
