import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceGridProps } from '../types';

const ServiceGridStandard: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceClick(service)}
          className="w-full text-left group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-primary/20 transition-all duration-300 flex flex-col items-start h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <div className="mb-6 p-4 bg-primary-light rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <service.icon size={32} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
            {service.description}
          </p>
          
          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>View Service</span>
            <ArrowRight size={20} className="ml-2" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceGridStandard;