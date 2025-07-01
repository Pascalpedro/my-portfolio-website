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
      
      <div className="relative z-10 max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Header Section - Mobile/Desktop */}
          <div className="lg:col-span-4 xl:col-span-3">
            <Header />
            <div className="mt-6 hidden lg:block">
              <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 min-h-[600px]">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;