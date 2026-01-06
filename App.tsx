import React, { useState } from 'react';
import { SERVICES } from './constants';
import { ServiceData } from './types';
import ServiceGridStandard from './components/ServiceGridStandard';
import ServiceGridBento from './components/ServiceGridBento';
import ServiceIconRail from './components/ServiceIconRail';
import ServiceFeatureCards from './components/ServiceFeatureCards';
import ServiceMinimalList from './components/ServiceMinimalList';
import ServiceModal from './components/ServiceModal';
import { LayoutGrid, Grid3X3, StretchHorizontal, SquareStack, List } from 'lucide-react';

type LayoutType = 'standard' | 'bento' | 'rail' | 'feature' | 'list';

const App: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState<LayoutType>('standard');
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200); // Clear data after animation
  };

  const renderLayout = () => {
    const commonProps = {
      services: SERVICES,
      onServiceClick: handleServiceClick
    };

    switch (activeLayout) {
      case 'standard':
        return <ServiceGridStandard {...commonProps} />;
      case 'bento':
        return <ServiceGridBento {...commonProps} />;
      case 'rail':
        return <ServiceIconRail {...commonProps} />;
      case 'feature':
        return <ServiceFeatureCards {...commonProps} />;
      case 'list':
        return <ServiceMinimalList {...commonProps} />;
      default:
        return <ServiceGridStandard {...commonProps} />;
    }
  };

  const tabs: { id: LayoutType; label: string; icon: React.ElementType }[] = [
    { id: 'standard', label: 'Standard', icon: LayoutGrid },
    { id: 'bento', label: 'Bento Grid', icon: Grid3X3 },
    { id: 'rail', label: 'Icon Rail', icon: StretchHorizontal },
    { id: 'feature', label: 'Features', icon: SquareStack },
    { id: 'list', label: 'Minimal List', icon: List },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <h1 className="text-xl font-bold tracking-tight">Flood Doctor</h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Service Layout Demos
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Restoration Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a layout style below to view our different service grid implementations.
          </p>
        </div>

        {/* Layout Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLayout(tab.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2
                ${activeLayout === tab.id 
                  ? 'bg-primary text-white shadow-lg ring-2 ring-primary ring-offset-2' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }
              `}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Display */}
        <div className="animate-in fade-in zoom-in duration-300">
           {renderLayout()}
        </div>

      </main>
      
      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Flood Doctor. Concept Design.
      </footer>

      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;