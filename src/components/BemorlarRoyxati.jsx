import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const bemorlarData = [
  {
    fish: 'Kamila Erkinova',
    sana: '17.07.1980',
    kasalliklar: ['Gipertoniya', 'Bosh og‘rig‘i'],
    oxirgiMurojaat: '15.04.2023',
    manzil: 'Toshkent',
    telefon: '+998901234587',
  },
  {
    fish: 'Anvar Rahimov',
    sana: '25.03.1975',
    kasalliklar: ['Diabet'],
    oxirgiMurojaat: '10.01.2022',
    manzil: 'Andijon',
    telefon: '+998931234517',
  },
  {
    fish: 'Mehriyo Abdullayeva',
    sana: '02.11.1983',
    kasalliklar: ['Astma', 'Tonsillit'],
    oxirgiMurojaat: '20.06.2024',
    manzil: 'Farg‘ona',
    telefon: '+998941234547',
  },
];

export default function BemorlarJadvali() {
  const [search, setSearch] = useState('');
  const [tanlanganBemor, setTanlanganBemor] = useState(null);

  const ochModal = (bemor) => {
    setTanlanganBemor(bemor);
  };

  const yopModal = () => {
    setTanlanganBemor(null);
  };

 const filterBemorlar = bemorlarData.filter((b) => {
  const query = search.toLowerCase().trim();

  if (!query) return true;

  // Agar faqat raqamlar yozilgan bo‘lsa (telefon raqam uchun)
  const isNumberSearch = /^\d+$/.test(query);

  if (isNumberSearch) {
    return b.telefon.replace(/\D/g, '').includes(query);
  } else {
    return b.fish.toLowerCase().includes(query);
  }
});

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bemorlar</h1>

      <div className="mb-4 relative">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Bemorni qidirish"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border rounded-md px-4 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">F.I.Sh.</th>
              <th className="text-left px-4 py-2">Tug'ilgan sana</th>
              <th className="text-left px-4 py-2">Kasalliklar</th>
              <th className="text-left px-4 py-2">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {filterBemorlar.map((bemor, index) => (
              <tr key={index} className="border-t hover:bg-blue-50">
                <td className="px-4 py-2">{bemor.fish}</td>
                <td className="px-4 py-2">{bemor.sana}</td>
                <td className="px-4 py-2">{bemor.kasalliklar.join(', ')}</td>
                <td
                  className="px-4 py-2 text-blue-600 hover:underline cursor-pointer"
                  onClick={() => ochModal(bemor)}
                >
                  Ko‘rish
                </td>
              </tr>
            ))}
            {filterBemorlar.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-4">
                  Bemor topilmadi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {tanlanganBemor && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={yopModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Bemor haqida ma’lumot</h2>
            <p><strong>F.I.Sh:</strong> {tanlanganBemor.fish}</p>
            <p><strong>Tug‘ilgan sana:</strong> {tanlanganBemor.sana}</p>
            <p><strong>Oxirgi murojaat:</strong> {tanlanganBemor.oxirgiMurojaat}</p>
            <p><strong>Manzil:</strong> {tanlanganBemor.manzil}</p>
            <p><strong>Telefon:</strong> {tanlanganBemor.telefon}</p>
            <p><strong>Kasalliklar:</strong></p>
            <ul className="list-disc list-inside ml-4">
              {tanlanganBemor.kasalliklar.map((kasallik, i) => (
                <li key={i}>{kasallik}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
