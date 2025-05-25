import { siteContent } from '../content';

const Desempenho = () => {
  return (
    <section id="desempenho" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{siteContent.desempenho.title}</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          {siteContent.desempenho.content}
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-800 text-white py-4 px-6">
              <h3 className="text-xl font-bold">Reconhecimento no Mercado Brasileiro</h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {siteContent.desempenho.highlights.map((highlight, index) => (
                  <div key={index} className="flex border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-800 font-bold text-xl">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{highlight.name}</h4>
                      <p className="text-gray-600">{highlight.recognition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-green-600 text-white p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.34998 9.35001V11.5C4.34998 15.58 7.91998 18.85 12 18.85C16.08 18.85 19.65 15.58 19.65 11.5V9.35001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18.8V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 22H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Certificações Relevantes no Brasil
          </h3>
          <p className="mb-4">
            No mercado brasileiro, certificações como SBIS (Sociedade Brasileira de Informática em Saúde), 
            HIMSS (Healthcare Information and Management Systems Society) e registro na ANVISA como SAMD 
            (Software as a Medical Device) são diferenciais importantes que atestam a qualidade e conformidade 
            das soluções.
          </p>
          <p>
            Sistemas como Philips Tasy EMR e SOUL MV se destacam por possuírem estas certificações, 
            demonstrando conformidade com padrões nacionais e internacionais de qualidade e segurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Desempenho;
