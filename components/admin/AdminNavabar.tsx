import React from 'react'

function AdminNavabar() {
  return (
    <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-sm px-6 md:px-10 py-4 flex items-center justify-between`}
  >
    {/* Logo */}
    <div className="flex items-center gap-2 cursor-pointer select-none">
      <img src="/logo.svg" alt="Homify" className="w-9 h-9 object-contain" />
      <h1 className="text-2xl font-bold text-white tracking-tight">FOODIFY</h1>
    </div>


    <div>
      <a href="/login" className="bg-white text-gray-800 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white shadow-md hover:shadow-lg">
       Logout 
      </a>
    </div>
  </nav>
  )
}

export default AdminNavabar