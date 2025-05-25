import { siteContent } from '../content';

const Segmentacao = () => {
  return (
    <section id="segmentacao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{siteContent.segmentacao.title}</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          {siteContent.segmentacao.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {siteContent.segmentacao.segments.map((segment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className={`h-2 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-600' : 'bg-purple-600'}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{segment.title}</h3>
                <p className="text-gray-600 mb-6">{segment.content}</p>
                
                <div className="space-y-4">
                  {segment.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="border-l-4 border-gray-200 pl-4 py-1">
                      <h4 className="font-bold text-gray-800">{highlight.name}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-800 text-white p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Mercado Brasileiro em Evolução</h3>
          <p>
            O mercado brasileiro de softwares médico-hospitalares tem apresentado crescimento significativo, 
            com soluções nacionais e internacionais adaptadas às necessidades específicas do sistema de saúde local, 
            incluindo integração com o SUS e conformidade com regulamentações da ANVISA e CFM.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Segmentacao;
