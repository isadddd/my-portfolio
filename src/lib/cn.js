// Gabungkan class kondisional dengan clsx dan tailwind-merge (hindari class duplikat).
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
