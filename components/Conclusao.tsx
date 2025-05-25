import { siteContent } from '../content';

const Conclusao = () => {
  return (
    <section id="conclusao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{siteContent.conclusao.title}</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          {siteContent.conclusao.content}
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.conclusao.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`p-4 text-white ${
                  index === 0 ? 'bg-blue-600' : 
                  index === 1 ? 'bg-green-600' : 
                  'bg-purple-600'
                }`}>
                  <h3 className="text-lg font-bold">{recommendation.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{recommendation.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-800 text-white p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Nota Final</h3>
          <p className="mb-6">
            {siteContent.conclusao.final_note}
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow-lg inline-block">
              Mercado Brasileiro de Softwares Médico-Hospitalares
            </div>
          </div>
        </div>

        <div className="mt-16" id="limitacoes">
          <div className="max-w-3xl mx-auto bg-gray-100 border border-gray-300 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{siteContent.limitacoes.title}</h3>
            <p className="text-gray-600">
              {siteContent.limitacoes.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusao;
