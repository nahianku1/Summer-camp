import React from 'react'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <DashboardSidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard