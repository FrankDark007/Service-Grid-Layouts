import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceGridProps } from '../types';

const ServiceGridBento: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(240px,auto)] gap-4">
      {services.map((service, index) => {
        // First item spans 2x2 in desktop
        const isFeatured = index === 0;
        
        return (
          <button
            key={service.id}
            onClick={() => onServiceClick(service)}
            className={`w-full text-left group relative overflow-hidden rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${isFeatured 
                ? 'md:col-span-2 md:row-span-2 bg-primary text-white' 
                : 'md:col-span-1 bg-white border border-gray-100 hover:border-primary/30'
              }
            `}
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${isFeatured ? 'bg-white/20 text-white' : 'bg-primary-light text-primary'}`}>
                <service.icon size={isFeatured ? 40 : 28} strokeWidth={1.5} />
              </div>
              <ArrowUpRight 
                className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 
                  ${isFeatured ? 'text-white/70 group-hover:text-white' : 'text-gray-300 group-hover:text-primary'}`} 
                size={24} 
              />
            </div>

            <div className="relative z-10 mt-6">
              <h3 className={`font-bold mb-2 ${isFeatured ? 'text-3xl' : 'text-lg text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`${isFeatured ? 'text-blue-100 text-lg max-w-md' : 'text-gray-500 text-sm line-clamp-2'}`}>
                {service.description}
              </p>
            </div>

            {/* Decorative background for featured card */}
            {isFeatured && (
              <div className="absolute -bottom-12 -right-12 text-white/5 rotate-[-15deg] transform group-hover:scale-110 transition-transform duration-500">
                <service.icon size={300} strokeWidth={1} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ServiceGridBento;