import { siteContent } from '../content';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.title}</h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-8">{siteContent.subtitle}</p>
        <div className="inline-block bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          <a href="#segmentacao">Explorar Análise</a>
        </div>
        
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-green-500 mr-3"></div>
            <h2 className="text-xl font-semibold">Estudo Exclusivo</h2>
            <div className="w-12 h-1 bg-green-500 ml-3"></div>
          </div>
          <p className="text-blue-100">
            Análise detalhada das principais soluções de software para gestão médico-hospitalar 
            disponíveis no mercado brasileiro, com foco em aplicações, desempenho e modelos de custo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
