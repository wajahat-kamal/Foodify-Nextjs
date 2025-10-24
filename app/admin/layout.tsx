import AdminNavabar from '@/components/admin/AdminNavabar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import Dashboard from './page'

function Layout() {
  return (
    <div>
      <AdminNavabar/>
      <div className='mt-16 flex flex-row w-full'>
      <Sidebar/>

      <Dashboard/>
      </div>
    </div>
  )
}

export default Layout