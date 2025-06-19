import React, { useState } from 'react';

const viloyatlar = {
  Toshkent: ['Chilonzor', 'Yunusobod', 'Mirzo Ulug‘bek'],
  Andijon: ['Asaka', 'Xonobod', 'Shahrixon'],
  Fargona: ['Qo‘qon', 'Marg‘ilon', 'Farg‘ona shahri'],
};

const kasalliklar = ['Gipertoniya', 'Diabet', 'Astma', 'Bosh og‘rig‘i'];
const dorilar = ['Paracetamol', 'Insulin', 'Ventolin', 'Analgin'];

export default function NavbatlarForm() {
  const [bemor, setBemor] = useState({
    ism: '',
    familiya: '',
    otasi: '',
    tugilgan: '',
    viloyat: '',
    tuman: '',
    manzilQolgan: '',
    kasallik: '',
    dori: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBemor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yuborilgan ma'lumot:", bemor);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-10">
      <div className="w-full max-w-3xl bg-white rounded shadow p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Yangi Bemor Qo‘shish</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="ism" value={bemor.ism} onChange={handleChange} placeholder="Ism" className="input" />
            <input name="familiya" value={bemor.familiya} onChange={handleChange} placeholder="Familiya" className="input" />
            <input name="otasi" value={bemor.otasi} onChange={handleChange} placeholder="Otasi ismi" className="input" />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Tug‘ilgan sana</label>
            <input type="date" name="tugilgan" value={bemor.tugilgan} onChange={handleChange} className="input" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label>Viloyat</label>
              <select name="viloyat" value={bemor.viloyat} onChange={handleChange} className="input">
                <option value="">Tanlang</option>
                {Object.keys(viloyatlar).map((vil) => (
                  <option key={vil} value={vil}>{vil}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Tuman</label>
              <select
                name="tuman"
                value={bemor.tuman}
                onChange={handleChange}
                className="input"
                disabled={!bemor.viloyat}
              >
                <option value="">Tanlang</option>
                {bemor.viloyat &&
                  viloyatlar[bemor.viloyat].map((tum) => (
                    <option key={tum} value={tum}>{tum}</option>
                  ))}
              </select>
            </div>

            <div>
              <label>Manzil (qo‘shimcha)</label>
              <input
                name="manzilQolgan"
                value={bemor.manzilQolgan}
                onChange={handleChange}
                placeholder="Ko‘cha, uy raqami..."
                className="input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Kasallik</label>
              <select name="kasallik" value={bemor.kasallik} onChange={handleChange} className="input">
                <option value="">Tanlang</option>
                {kasalliklar.map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Dori vositasi</label>
              <select name="dori" value={bemor.dori} onChange={handleChange} className="input">
                <option value="">Tanlang</option>
                {dorilar.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Qo‘shish
          </button>
        </form>
      </div>
    </div>
  );
}
