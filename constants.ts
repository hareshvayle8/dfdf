
import { Server, User } from './types';

export const SERVERS: Server[] = [
  { id: 'us-ny', name: 'United States', city: 'New York', ping: 23, flag: '🇺🇸', recommended: true },
  { id: 'jp-tk', name: 'Japan', city: 'Tokyo', ping: 50, flag: '🇯🇵', recommended: true },
  { id: 'de-be', name: 'Germany', city: 'Berlin', ping: 112, flag: '🇩🇪' },
  { id: 'gb-lo', name: 'United Kingdom', city: 'London', ping: 78, flag: '🇬🇧', recommended: true },
  { id: 'ca-to', name: 'Canada', city: 'Toronto', ping: 25, flag: '🇨🇦' },
  { id: 'au-sy', name: 'Australia', city: 'Sydney', ping: 180, flag: '🇦🇺' },
  { id: 'fr-pa', name: 'France', city: 'Paris', ping: 88, flag: '🇫🇷' },
  { id: 'sg-sg', name: 'Singapore', city: 'Singapore', ping: 65, flag: '🇸🇬', recommended: true },
  { id: 'br-sp', name: 'Brazil', city: 'São Paulo', ping: 210, flag: '🇧🇷' },
  { id: 'in-mu', name: 'India', city: 'Mumbai', ping: 130, flag: '🇮🇳' },
  { id: 'kr-se', name: 'South Korea', city: 'Seoul', ping: 95, flag: '🇰🇷' },
  { id: 'nl-am', name: 'Netherlands', city: 'Amsterdam', ping: 102, flag: '🇳🇱' },
  { id: 'it-ro', name: 'Italy', city: 'Rome', ping: 115, flag: '🇮🇹' },
  { id: 'es-ma', name: 'Spain', city: 'Madrid', ping: 108, flag: '🇪🇸' },
  { id: 'ch-zu', name: 'Switzerland', city: 'Zurich', ping: 98, flag: '🇨🇭' },
  { id: 'se-st', name: 'Sweden', city: 'Stockholm', ping: 120, flag: '🇸🇪' },
  { id: 'ae-du', name: 'United Arab Emirates', city: 'Dubai', ping: 145, flag: '🇦🇪' },
  { id: 'hk-hk', name: 'Hong Kong', city: 'Hong Kong', ping: 55, flag: '🇭🇰', recommended: true },
  { id: 'mx-mx', name: 'Mexico', city: 'Mexico City', ping: 92, flag: '🇲🇽' },
  { id: 'za-jo', name: 'South Africa', city: 'Johannesburg', ping: 240, flag: '🇿🇦' },
  { id: 'no-os', name: 'Norway', city: 'Oslo', ping: 110, flag: '🇳🇴' },
  { id: 'fi-he', name: 'Finland', city: 'Helsinki', ping: 125, flag: '🇫🇮' },
  { id: 'at-vi', name: 'Austria', city: 'Vienna', ping: 105, flag: '🇦🇹' },
  { id: 'ie-du', name: 'Ireland', city: 'Dublin', ping: 85, flag: '🇮🇪' },
  { id: 'pl-wa', name: 'Poland', city: 'Warsaw', ping: 118, flag: '🇵🇱' },
  { id: 'tr-is', name: 'Turkey', city: 'Istanbul', ping: 135, flag: '🇹🇷' },
  { id: 'th-ba', name: 'Thailand', city: 'Bangkok', ping: 160, flag: '🇹🇭' },
  { id: 'ar-ba', name: 'Argentina', city: 'Buenos Aires', ping: 195, flag: '🇦🇷' },
  { id: 'dk-co', name: 'Denmark', city: 'Copenhagen', ping: 108, flag: '🇩🇰' },
  { id: 'be-br', name: 'Belgium', city: 'Brussels', ping: 95, flag: '🇧🇪' }
];

export const MOCK_USER: User = {
  name: 'John Doe',
  email: 'john.doe@zenithvpn.io',
  memberSince: '2021',
  usage: {
    totalGb: 145,
    history: [
      { date: 'Wk 1', amount: 30 },
      { date: 'Wk 2', amount: 45 },
      { date: 'Wk 3', amount: 35 },
      { date: 'Wk 4', amount: 35 }
    ]
  }
};
