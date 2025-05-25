import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" stroke="white" strokeWidth="2" />
              <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">Softwares Médico-Hospitalares</h1>
            <p className="text-sm text-green-200">Mercado Brasileiro</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#intro" className="hover:text-green-200 transition-colors">Introdução</a>
          <a href="#segmentacao" className="hover:text-green-200 transition-colors">Segmentação</a>
          <a href="#funcionalidades" className="hover:text-green-200 transition-colors">Funcionalidades</a>
          <a href="#desempenho" className="hover:text-green-200 transition-colors">Desempenho</a>
          <a href="#custos" className="hover:text-green-200 transition-colors">Custos</a>
          <a href="#conclusao" className="hover:text-green-200 transition-colors">Conclusão</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#intro" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Introdução</a>
            <a href="#segmentacao" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Segmentação</a>
            <a href="#funcionalidades" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Funcionalidades</a>
            <a href="#desempenho" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Desempenho</a>
            <a href="#custos" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Custos</a>
            <a href="#conclusao" className="text-white hover:text-green-200 transition-colors" onClick={toggleMenu}>Conclusão</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
