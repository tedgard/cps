import { Route, Routes } from 'react-router-dom'
import AppErrorBoundary from './components/AppErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import ImageStreamingPage from './pages/ImageStreamingPage'
import LegacyPage from './pages/LegacyPage'
import NotFoundPage from './pages/NotFoundPage'
import PredictiveImageryPage from './pages/PredictiveImageryPage'
import ReferencesPage from './pages/ReferencesPage'
import TechniqueAtlasPage from './pages/TechniqueAtlasPage'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <AppErrorBoundary>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="legacy" element={<LegacyPage />} />
            <Route path="image-streaming" element={<ImageStreamingPage />} />
            <Route path="predictive-imagery" element={<PredictiveImageryPage />} />
            <Route path="technique-atlas" element={<TechniqueAtlasPage />} />
            <Route path="references" element={<ReferencesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppErrorBoundary>
    </>
  )
}

export default App
