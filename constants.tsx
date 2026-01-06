import { Droplets, Bug, Flame, AlertTriangle, CloudRain, Building2 } from 'lucide-react';
import { ServiceData } from './types';

export const SERVICES: ServiceData[] = [
  {
    id: '1',
    title: 'Water Damage Restoration',
    description: '60-min emergency response to stop leaks and dry your property fast.',
    details: 'Our rapid response team uses industrial-grade extractors and dehumidifiers to remove water and moisture efficiently. We strictly monitor drying progress daily using advanced moisture detection equipment to prevent secondary damage like mold growth and structural warping. We handle everything from burst pipes to flooding.',
    icon: Droplets,
    slug: 'water-damage-restoration',
  },
  {
    id: '2',
    title: 'Mold Remediation',
    description: 'IICRC certified removal ensuring safe and permanent mold elimination.',
    details: 'We identify the moisture source, contain the affected area, and use HEPA filtration to remove mold spores safely. Our process includes antimicrobial treatments, physical removal of infested materials, and third-party clearance testing to ensure your environment is safe and healthy for return.',
    icon: Bug,
    slug: 'mold-remediation',
  },
  {
    id: '3',
    title: 'Fire & Smoke Damage',
    description: 'Complete restoration from structural repair to smoke odor removal.',
    details: 'We handle soot removal, comprehensive deodorization, and structural repairs for fire-damaged properties. Our team carefully cleans salvageable contents and restores your property to pre-loss condition using advanced cleaning techniques like thermal fogging and ozone treatment.',
    icon: Flame,
    slug: 'fire-smoke-damage',
  },
  {
    id: '4',
    title: 'Sewage Cleanup',
    description: 'Hazmat protocols to safely sanitize and restore affected areas.',
    details: 'Sewage backups require immediate attention. We strictly follow IICRC S500 standards for Category 3 water. We remove affected porous materials, sanitize all surfaces with hospital-grade disinfectants, and verify cleanliness through ATP testing to ensure the area is bacteria-free.',
    icon: AlertTriangle,
    slug: 'sewage-cleanup',
  },
  {
    id: '5',
    title: 'Storm Damage',
    description: '24/7 availability for weather-related emergencies and board-ups.',
    details: 'From emergency board-ups and roof tarping to debris removal, we secure your property immediately after a storm. We then handle full reconstruction services for wind, hail, and flood damage, working directly with your insurance provider to expedite the claim process.',
    icon: CloudRain,
    slug: 'storm-damage',
  },
  {
    id: '6',
    title: 'Commercial Services',
    description: 'Minimize downtime with rapid business disaster recovery solutions.',
    details: 'We offer priority service agreements (PSA) for businesses to ensure immediate response. Our large-loss team manages complex projects to get your operations back up and running with minimal interruption. We specialize in restoration for retail, office, healthcare, and industrial facilities.',
    icon: Building2,
    slug: 'commercial-services',
  },
];