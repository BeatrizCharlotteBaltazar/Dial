import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CoverPage from './pages/CoverPage';
import HomePage from './pages/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
