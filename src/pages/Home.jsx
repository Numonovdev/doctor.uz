import React from 'react';
import { FaUserInjured, FaVial, FaCalendarCheck, FaUserMd, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Home() {
 const navigate = useNavigate();

 function handleHome(){
  navigate("/")
 }
 function handlebemorlar(){
  navigate("/bemorlar")
 }
 
 function handletahlillar(){
  navigate("/tahlillar")
 }

 function handleProfil(){
  navigate("/profil")
 }

 function handlenavbatlar(){
  navigate("/navbatlar")
 }
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Shifokor Paneli</h2>
        <nav className="space-y-4">
          <button onClick={handleHome} className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaHome /> Home
          </button>
          <button onClick={handlebemorlar} className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaUserInjured /> Bemorlar
          </button>
          <button onClick={handletahlillar} className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaVial /> Tahlillar
          </button>
          <button onClick={handlenavbatlar} className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaCalendarCheck /> Navbatlar
          </button>
          <button onClick={handleProfil} className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaUserMd /> Profil
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">Boshqaruv paneli</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Bugungi bemorlar</p>
            <h2 className="text-3xl font-bold text-blue-900">12</h2>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Kutayotgan navbat</p>
            <h2 className="text-3xl font-bold text-blue-900">5</h2>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Tahlillar tayyor</p>
            <h2 className="text-3xl font-bold text-blue-900">9</h2>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Profil ko‘rildi</p>
            <h2 className="text-3xl font-bold text-blue-900">3</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
