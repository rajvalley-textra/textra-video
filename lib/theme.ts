import type { CSSProperties } from 'react';

export const C = {
  navy: '#273572',
  navyDark: '#1b2558',
  navyLight: '#2d3d84',
  blue: '#1A71B1',
  teal: '#66BCAD',
  tealDark: '#4da89a',
  gray50: '#f8f9fb',
  gray100: '#f0f2f5',
  gray200: '#e2e6ec',
  gray300: '#cdd3db',
  gray400: '#a8b2bf',
  gray500: '#7e8b99',
  gray600: '#576170',
  white: '#fff',
};

export const grad = 'linear-gradient(135deg, #1A71B1 0%, #66BCAD 100%)';
export const gradHero = 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)';

export const sh = {
  sm: '0 2px 8px rgba(39,53,114,0.08)',
  md: '0 4px 16px rgba(39,53,114,0.12)',
  lg: '0 8px 32px rgba(39,53,114,0.18)',
  xl: '0 20px 60px rgba(39,53,114,0.26)',
};

export const WRAP: CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
