import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
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
        <Route path="post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
