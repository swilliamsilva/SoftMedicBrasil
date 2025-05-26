const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Softwares Médico-Hospitalares no Brasil</h2>
            <p className="text-blue-200 mt-1">Análise comparativa - Maio 2025</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Navegação</h3>
              <ul className="space-y-1">
                <li><a href="#intro" className="text-blue-200 hover:text-white transition-colors">Introdução</a></li>
                <li><a href="#segmentacao" className="text-blue-200 hover:text-white transition-colors">Segmentação</a></li>
                <li><a href="#funcionalidades" className="text-blue-200 hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#desempenho" className="text-blue-200 hover:text-white transition-colors">Desempenho</a></li>
                <li><a href="#custos" className="text-blue-200 hover:text-white transition-colors">Custos</a></li>
                <li><a href="#conclusao" className="text-blue-200 hover:text-white transition-colors">Conclusão</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Sobre</h3>
              <p className="text-blue-200 max-w-xs">
                Este site apresenta uma análise comparativa dos principais softwares médico-hospitalares 
                disponíveis no mercado brasileiro, com foco em aplicações, desempenho e custos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>© 2025 - Análise de Softwares Médico-Hospitalares no Brasil</p>
          <p>                williamsilva.codigo@gmail.com </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
