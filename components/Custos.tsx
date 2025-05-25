import { siteContent } from '../content';

const Custos = () => {
  return (
    <section id="custos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{siteContent.custos.title}</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          {siteContent.custos.content}
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.custos.models.map((model, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className={`h-2 ${
                  index === 0 ? 'bg-blue-500' : 
                  index === 1 ? 'bg-purple-500' : 
                  'bg-green-500'
                }`}></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{model.title}</h3>
                  <p className="text-gray-600 text-sm">{model.content}</p>
                </div>
                <div className={`p-4 text-white text-sm ${
                  index === 0 ? 'bg-blue-600' : 
                  index === 1 ? 'bg-purple-600' : 
                  'bg-green-600'
                }`}>
                  <div className="font-bold mb-1">
                    {index === 0 ? 'Modelo típico: Assinatura mensal por usuário' : 
                     index === 1 ? 'Modelo típico: Assinatura mensal por localização' : 
                     'Modelo típico: Personalizado sob consulta'}
                  </div>
                  <div>
                    {index === 0 ? 'Valores históricos: R$85-R$89/mês (2021)' : 
                     index === 1 ? 'Valores em USD: $99-$649/mês' : 
                     'Fatores: porte, módulos, implantação'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 border border-yellow-200 p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-yellow-400 rounded-full p-2 mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#7C5800" strokeWidth="2"/>
                <path d="M12 8V12" stroke="#7C5800" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16H12.01" stroke="#7C5800" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Particularidades do Mercado Brasileiro</h3>
              <p className="text-yellow-800">
                No Brasil, a transparência de preços no setor de software médico-hospitalar é limitada, 
                especialmente para soluções mais robustas. Fatores como integração com o SUS, conformidade 
                com regulamentações da ANVISA e do CFM, e adaptações para o sistema tributário brasileiro 
                podem influenciar significativamente os custos finais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custos;
