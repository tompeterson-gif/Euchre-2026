
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import RegistrationPage from './pages/RegistrationPage';
import GolfPage from './pages/GolfPage';
import PastChampionsPage from './pages/PastChampionsPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>(Page.Home);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <LandingPage onNavigate={navigate} />;
      case Page.Pricing:
        return <PricingPage onSelect={() => navigate(Page.Registration)} />;
      case Page.Registration:
        return <RegistrationPage />;
      case Page.Golf:
        return <GolfPage />;
      case Page.Champions:
        return <PastChampionsPage />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-purple-regal flex flex-col">
      <Header onNavigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
