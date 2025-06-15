import './assets/scss/index.scss'

import React from 'react'
import AuthProvider from './providers/AuthProvider'
import SocketProvider from './providers/SocketProvider'
import { createTheme, MantineProvider } from '@mantine/core'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { Notifications } from '@mantine/notifications'
import { Outlet } from 'react-router'
import { useTheme } from '@/ThemeContext'

const theme = createTheme({
  cursorType: 'pointer',
  primaryColor: 'gray'
})

export default function App() {
  const { darkMode } = useTheme()

  return (
    <AuthProvider>
      <SocketProvider>
        <MantineProvider theme={theme}>
          <div className={`flex flex-col justify-between min-h-screen ${darkMode ? 'bg-[#141415]' : 'bg-white'}`}>
            <Header />
            <div className="flex-1 h-full">
              <Outlet />
            </div>
            <Footer />
          </div>
          <Notifications />
        </MantineProvider>
      </SocketProvider>
    </AuthProvider>
  )
}
