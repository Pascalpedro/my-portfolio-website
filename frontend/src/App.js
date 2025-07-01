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
    </div>
  );
}

export default App;