import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ServiceGridProps } from '../types';

const ServiceMinimalList: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceClick(service)}
          className="w-full text-left group flex items-center p-6 border-b border-gray-100 last:border-b-0 even:bg-slate-50 hover:bg-white hover:shadow-lg hover:scale-[1.01] hover:z-10 hover:border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset md:focus:ring-offset-2 md:focus:ring-offset-white relative focus:z-10"
        >
          <div className="flex-shrink-0 mr-6">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-sm">
              <service.icon size={22} />
            </div>
          </div>

          <div className="flex-grow md:flex md:items-center md:justify-between mr-4">
            <div className="md:w-1/3">
               <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
               </h3>
            </div>
            <div className="mt-1 md:mt-0 md:w-2/3 md:pl-4">
              <p className="text-gray-500 text-sm md:text-base line-clamp-1 group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
            <ChevronRight size={24} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceMinimalList;