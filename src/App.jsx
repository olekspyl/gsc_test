import Header from '@/shared/components/app/Header';
import Footer from '@/shared/components/app/Footer';
import Home from '@/pages/home/Home';
import NavBar from '@/shared/components/app/NavBar';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[url('@/assets/images/bg.webp')] bg-no-repeat bg-cover max-w-screen-2xl">
      {isMenuOpen && <NavBar closeMenu={() => setMenuOpen(false)} />}
      <Header toggleMenu={toggleMenu} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
