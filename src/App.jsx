import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'
import Students from './Pages/Students'
import Courses from './Pages/Courses'
import StudentProfile from './Pages/StudentProfile'

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/students/:id"
          element={<StudentProfile />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  )
}

export default App