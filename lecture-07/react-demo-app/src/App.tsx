import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import Header from './components/Header';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/about' element={<AboutPage />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
