import './App.css'
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import Landing from './components/Landing/Landing';
import Signup from './components/auth/Signup';
import Heromatching from './components/Lace Matching/Heromatching';
import Coloranalysis from './components/Color Analysis/Coloranalysis';
import Laceaura from './components/Lace Aura/Laceaura';
import Laceaurasearch from './components/Lace Aura/Laceaurasearch';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/lacematching" element={<Heromatching />} />
          <Route exact path="/coloranlysis" element={<Coloranalysis />} />
          <Route exact path="/laceaura" element={<Laceaura />} />
          <Route exact path="/laceaurasearch" element={<Laceaurasearch />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
      </AuthProvider>
    </>
  )
}


export default App
