
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveMatches from '@/components/LiveMatches';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-dark">
      <Header />
      <Hero />
      <LiveMatches />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Index;
