import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CTA from './components/CTA';
import LogoTicker from './components/LogoTicker';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-purple-100">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <ProblemSolutionSection />
        <UseCases />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
