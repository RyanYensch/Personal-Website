import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import StarsBackground from './components/StarsBackground/StarsBackground'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import CoursesPage from './pages/CoursesPage/CoursesPage'
import CareerPage from './pages/CareerPage/CareerPage'
import LinksPage from './pages/LinksPage/LinksPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'

function App() {
  return (
    <>
      <StarsBackground />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
