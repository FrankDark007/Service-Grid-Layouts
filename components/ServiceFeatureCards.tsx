import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceGridProps } from '../types';

const ServiceFeatureCards: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => {
        // Alternating gradients for visual interest
        const isEven = index % 2 === 0;
        const gradientClass = isEven 
          ? 'from-[#1a73e8] to-[#1557b0]' 
          : 'from-[#0f172a] to-[#334155]';

        return (
          <button
            key={service.id}
            onClick={() => onServiceClick(service)}
            className={`w-full text-left group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-opacity duration-300`} />
            
            {/* Background Icon (Decorative) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700">
              <service.icon size={240} strokeWidth={1.5} color="white" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                   <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                      <service.icon size={24} />
                   </div>
                   <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Restoration Service</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                  <p className="text-white/80 pt-2 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-white font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span>Explore Solution</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ServiceFeatureCards;