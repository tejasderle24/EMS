import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashboard'
import AdminDashboard from './components/Dashbord/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState("");

  const authData = useContext(AuthContext)
  console.log(authData);

  useEffect(() => {
    if (authData) {
      const LoggedInUser = localStorage.getItem("LoggedInUser")
      if (LoggedInUser) {
        setUser(LoggedInUser.role)
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin')
      localStorage.getItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData && authData.employee.find((e) => email == e.email && e.password == password)) {
      setUser('employee')
      localStorage.getItem('LoggedInUser', JSON.stringify({ role: 'employee' }))
    }
    else {
      alert(" Invalid Credentials")

    }
  }






  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
