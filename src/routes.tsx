import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import CreateUser from './pages/CreateUser'
import DeleteUser from './pages/DeleteUser'
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
        <Route path="create-user" element={<CreateUser />} />
        <Route path="delete-user" element={<DeleteUser />} />
        <Route path="post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
