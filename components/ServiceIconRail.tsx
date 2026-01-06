import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ServiceGridProps } from '../types';

const ServiceIconRail: React.FC<ServiceGridProps> = ({ services, onServiceClick }) => {
  return (
    <div className="w-full">
      {/* Mobile: Horizontal Scroll, Desktop: Simple Flex Wrap or Grid (but keeping Rail behavior as requested mainly for mobile feel) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0 no-scrollbar">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceClick(service)}
            className="w-full text-left snap-center shrink-0 w-[280px] md:w-auto flex flex-col bg-white rounded-xl border border-gray-200 p-6 hover:border-primary hover:ring-2 hover:ring-primary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                {service.title}
              </h3>
            </div>
            
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {service.description}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-primary">
              <span className="group-hover:underline">Learn more</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceIconRail;