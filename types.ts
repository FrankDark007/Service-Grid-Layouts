import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  slug: string;
}

export interface ServiceGridProps {
  services: ServiceData[];
  onServiceClick: (service: ServiceData) => void;
}
