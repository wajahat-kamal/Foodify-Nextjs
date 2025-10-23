import AdminNavabar from '@/components/AdminNavabar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Dashboard from './page'

function Layout() {
  return (
    <div>
      <AdminNavabar/>
      <div>
      <Sidebar/>
      </div>
    </div>
  )
}

export default Layout