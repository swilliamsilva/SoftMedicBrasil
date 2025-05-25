import { softwareList } from '../content';

const SoftwareTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Lista de Softwares Analisados</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
          Confira abaixo um resumo dos principais softwares médico-hospitalares disponíveis no mercado brasileiro.
        </p>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Software</th>
                <th className="py-3 px-4 text-left">Segmento</th>
                <th className="py-3 px-4 text-left">Destaque</th>
              </tr>
            </thead>
            <tbody>
              {softwareList.map((software, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 border-b border-gray-200 font-medium">{software.name}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{software.type}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{software.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          Dados coletados em maio de 2025, específicos para o mercado brasileiro.
        </div>
      </div>
    </section>
  );
};

export default SoftwareTable;
