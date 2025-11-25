import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/WelcomePage/WelcomePage.jsx'
import Login from './pages/LoginPage/LoginPage.jsx'
import Register from './pages/RegisterPage/RegisterPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
