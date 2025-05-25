import { siteContent } from '../content';

const Funcionalidades = () => {
  return (
    <section id="funcionalidades" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{siteContent.funcionalidades.title}</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          {siteContent.funcionalidades.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {siteContent.funcionalidades.features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{feature.content}</p>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="text-sm font-bold text-gray-500 mb-2">EXEMPLOS NO MERCADO BRASILEIRO</h4>
                <ul className="space-y-2">
                  {feature.examples.map((example, eIndex) => (
                    <li key={eIndex} className="flex items-start">
                      <div className="text-green-600 mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg max-w-3xl">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Tendências no Brasil</h3>
            <p className="text-gray-700">
              O mercado brasileiro tem acompanhado tendências globais como telemedicina, inteligência artificial e 
              interoperabilidade, mas com adaptações para atender às particularidades do sistema de saúde nacional, 
              incluindo conformidade com regulamentações locais e integração com o SUS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;
