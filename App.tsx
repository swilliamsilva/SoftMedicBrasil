import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Segmentacao from './components/Segmentacao';
import Funcionalidades from './components/Funcionalidades';
import Desempenho from './components/Desempenho';
import Custos from './components/Custos';
import Conclusao from './components/Conclusao';
import SoftwareTable from './components/SoftwareTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Segmentacao />
      <Funcionalidades />
      <Desempenho />
      <SoftwareTable />
      <Custos />
      <Conclusao />
      <Footer />
    </div>
  );
}

export default App;
