import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind classes with clsx
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Theme configuration - can be imported for dynamic styling
 */
export const theme = {
  colors: {
    primary: '#1F4E79',
    secondary: '#4A5973',
    accent: '#D9A441',
    text: {
      primary: '#1A1A1A',
      secondary: '#4D4D4D',
      light: '#FFFFFF',
    },
    bg: {
      main: '#F8FAFC',
      alt: '#E3E8EF',
      card: '#FFFFFF',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
}

/**
 * Glassmorphism generator
 */
export const glassmorphism = (opacity = 0.8, blur = 10) => ({
  background: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: '1px solid rgba(255, 255, 255, 0.2)',
})

/**
 * Dark glassmorphism
 */
export const glassmorphismDark = (opacity = 0.8, blur = 10) => ({
  background: `rgba(31, 78, 121, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: '1px solid rgba(255, 255, 255, 0.1)',
})