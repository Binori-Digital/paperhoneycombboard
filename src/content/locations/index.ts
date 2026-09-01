import type { Location } from './types';
import { locationsA } from './locations-a';
import { locationsB } from './locations-b';

export const locations: Location[] = [...locationsA, ...locationsB];

export const locationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
