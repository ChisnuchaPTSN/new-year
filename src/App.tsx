import Hero from './components/Hero';
import GreetingCard from './components/GreetingCard';
import Countdown from './components/Countdown';
import CelebrationButton from './components/CelebrationButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <GreetingCard />
      <Countdown />
      <CelebrationButton />
      <Footer />
    </div>
  );
}

export default App;
