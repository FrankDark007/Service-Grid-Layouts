import React, { useEffect } from 'react';
import { X, CheckCircle, Phone } from 'lucide-react';
import { ServiceData } from '../types';

interface ServiceModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
        aria-hidden="true" 
      />
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header Image/Pattern */}
        <div className="h-32 bg-primary relative overflow-hidden shrink-0">
           <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
           <div className="absolute -bottom-10 -right-10 opacity-20 text-white transform rotate-12">
             <service.icon size={200} />
           </div>
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
             aria-label="Close modal"
           >
             <X size={20} />
           </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary-light rounded-2xl text-primary shrink-0">
              <service.icon size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-500 font-medium">{service.description}</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {service.details}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
               What to expect
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {['24/7 Emergency Response', 'Licensed & Insured', 'Advanced Equipment', 'Direct Insurance Billing'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3 shrink-0">
          <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <Phone size={18} />
            Call for Emergency Service
          </button>
          <button 
             onClick={onClose}
             className="sm:flex-none bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceModal;