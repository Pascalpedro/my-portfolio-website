import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Header, 
  Sidebar, 
  GeometricBackground, 
  AboutPage, 
  PortfolioPage, 
  ResumePage, 
  BlogPage, 
  ContactPage 
} from './components';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/2348039145668" // Replace with your WhatsApp number
    className="fixed bottom-6 right-6 z-50"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.55 2 2 6.55 2 12.05c0 1.97.52 3.83 1.5 5.48L2 22l4.65-1.45c1.6.88 3.38 1.33 5.35 1.33 5.49 0 10.04-4.55 10.04-10.05S17.54 2 12.04 2zm0 18.07c-1.65 0-3.24-.45-4.64-1.3l-.33-.2-2.76.86.9-2.7-.21-.35C4.45 15.21 4 13.66 4 12.05c0-4.44 3.61-8.05 8.04-8.05 4.44 0 8.05 3.61 8.05 8.05s-3.61 8.05-8.05 8.05zm4.6-5.6c-.26-.13-1.52-.75-1.75-.83-.23-.08-.4-.13-.56.13-.17.26-.65.83-.8 1-.14.17-.3.2-.56.07-.26-.13-1.12-.41-2.14-1.3-.79-.7-1.32-1.56-1.48-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.56-1.34-.76-1.84-.2-.5-.4-.43-.56-.44-.14-.01-.3-.01-.46-.01s-.46.07-.7.33c-.24.26-.94.92-.94 2.24s.96 2.61 1.1 2.79c.13.17 1.89 2.88 4.6 4.04.64.28 1.13.44 1.52.57.64.2 1.22.17 1.68.1.51-.07 1.52-.62 1.74-1.22.21-.61.21-1.13.15-1.22-.06-.09-.24-.15-.5-.27z" />
      </svg>
    </div>
  </a>
);

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'resume':
        return <ResumePage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div className="App min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <GeometricBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-4 lg:p-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Fixed Width */}
          <div className="hidden lg:flex flex-col gap-6 w-80">
            <Header />
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>

          {/* Mobile Header and Navigation */}
          <div className="lg:hidden w-full space-y-6">
            <Header />
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>

          {/* Main Content */}
          <div className="hidden lg:block flex-1">
            <div className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 min-h-[700px] border border-gray-700/50">
              {renderPage()}
            </div>
          </div>
        </div>
        
        {/* Mobile Main Content */}
        <div className="lg:hidden mt-6">
          <div className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 min-h-[600px] border border-gray-700/50">
            {renderPage()}
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;