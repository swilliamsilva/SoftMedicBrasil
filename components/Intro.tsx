import { siteContent } from '../content';

const Intro = () => {
  return (
    <section id="intro" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">{siteContent.intro.title}</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed">
              {siteContent.intro.content}
            </p>
          </div>
          
          <div className="flex items-center justify-center mt-10">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4">
            Estudo realizado em maio de 2025, com foco exclusivo no mercado brasileiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
