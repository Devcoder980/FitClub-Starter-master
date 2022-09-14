import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Program from './component/Programs/Program';
import Reasons from './component/Reasons/Reasons';
import Testomonials from './component/Testomonials/Testomonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testomonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
