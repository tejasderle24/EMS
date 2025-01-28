import React from 'react'
import { useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
import AdminDashboard from './components/Dashbord/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

function App() {

  const [user, setUser] = useState("");

  const handleLogin = () => {
    
  }


  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  }, []);


  return (
    <>
      {!user ? <Login /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
