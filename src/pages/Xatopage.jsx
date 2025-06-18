import React from 'react';
import { FaUserInjured, FaVial, FaCalendarCheck, FaUserMd, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Xatopage() {
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
      404
      </main>






      
    </div>
  );
}
