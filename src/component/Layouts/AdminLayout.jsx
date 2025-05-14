// src/layouts/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import SidebarAdmin from '../Elements/SideBarAdmin/SidebarAdmin';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
        {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0">
        <SidebarAdmin />
      </aside>
      {/* Konten */}
      <main className="flex-1 bg-white overflow-x-auto p-6 border border-red-500">
        <div className="max-w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
