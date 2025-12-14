import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VoyerPage from './pages/VoyerPage'
import SpiedOnPage from './pages/SpiedOnPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voyer" element={<VoyerPage />} />
        <Route path="/spied-on" element={<SpiedOnPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
