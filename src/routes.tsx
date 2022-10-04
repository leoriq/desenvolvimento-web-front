import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditUser from './pages/EditUser'
import Home from './pages/Home'
import Login from './pages/Login'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
