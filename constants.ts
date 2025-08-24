import { ClassInfo, ScheduleDay, PricePlan, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { name: 'Clases', href: '#clases' },
  { name: 'Precios', href: '#precios' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export const CLASSES_DATA: ClassInfo[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.92M9 21a6 6 0 01-6-6v-1a6 6 0 016-6h6a6 6 0 016 6v1a6 6 0 01-6 6H9z" /></svg>`,
    title: 'BOXEO',
    description: 'Aprende la "dulce ciencia" del boxeo. Mejora tu agilidad, coordinación y resistencia con nuestros entrenadores profesionales.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    title: 'MUAY THAI',
    description: 'Domina el "arte de las ocho extremidades". Nuestro entrenamiento de Muay Thai te hará más fuerte y te enseñará técnicas de defensa personal.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    title: 'ENTRENAMIENTO PERSONAL',
    description: 'Sesiones 1 a 1 a la medida para alcanzar tus objetivos específicos, ya sea pérdida de peso, fuerza o preparación para una competencia.',
  },
];

export const SCHEDULE_DATA: ScheduleDay[] = [
    { day: 'Lunes', mañana: [{time: '9:00 AM', name: 'Boxeo'}], tarde: [{time: '5:00 PM', name: 'Muay Thai'}], noche: [{time: '7:30 PM', name: 'Boxeo'}]},
    { day: 'Martes', mañana: [{time: '9:00 AM', name: 'Muay Thai'}], tarde: [{time: '6:00 PM', name: 'Boxeo'}], noche: [{time: '8:00 PM', name: 'Muay Thai'}]},
    { day: 'Miércoles', mañana: [{time: '9:00 AM', name: 'Boxeo'}], tarde: [], noche: [{time: '7:30 PM', name: 'Boxeo'}]},
    { day: 'Jueves', mañana: [{time: '9:00 AM', name: 'Muay Thai'}], tarde: [{time: '6:00 PM', name: 'Boxeo'}], noche: []},
    { day: 'Viernes', mañana: [{time: '9:00 AM', name: 'Boxeo'}], tarde: [], noche: [{time: '7:00 PM', name: 'Entrenamiento'}]},
    { day: 'Sábado', mañana: [{time: '10:00 AM', name: 'Clase Mixta'}], tarde: [], noche: [{time: '', name: 'Cerrado'}]},
];


export const PRICES_DATA: PricePlan[] = [
  {
    title: 'PLAN MENSUAL',
    price: '$700',
    period: '/mes',
    features: ['Acceso a todas las clases', 'Horario flexible', 'Clases grupales'],
    notIncluded: ['Entrenamiento Personal', 'Incluye equipo básico'],
    highlighted: false,
  },
  {
    title: 'PLAN ANUAL',
    price: '$7,500',
    period: '/año',
    saving: '¡Ahorra $900 al año!',
    features: ['Acceso a todas las clases', 'Horario flexible', 'Clases grupales', 'Sesiones de entrenamiento personal (2 por mes)', 'Acceso a eventos y talleres', 'Incluye equipo básico'],
    highlighted: true,
  },
  {
    title: 'PLAN TRIMESTRAL',
    price: '$1,800',
    period: '/trimestre',
    features: ['Acceso a todas las clases', 'Horario flexible', 'Clases grupales'],
    notIncluded: ['Entrenamiento Personal', 'Incluye equipo básico'],
    highlighted: false,
  },
];


export const GALLERY_DATA: GalleryImage[] = [
    { title: 'ENTRENAMIENTO BOXEO', imageUrl: 'https://github.com/vita-lottie-characters/Hol/blob/ec6a2dc1a19f3332c06b59bdb5b525b865ef51c0/de03f673-1393-49dc-9fdd-de3f283ecc03.jpg?raw=true' },
    { title: 'INTERIOR GIMNASIO', imageUrl: 'https://github.com/vita-lottie-characters/Hol/blob/ec6a2dc1a19f3332c06b59bdb5b525b865ef51c0/4aab05c6-85c3-41a0-a874-989a21e10c27.jpg?raw=true' },
    { title: 'MUAY THAI', imageUrl: 'https://github.com/vita-lottie-characters/Hol/blob/ec6a2dc1a19f3332c06b59bdb5b525b865ef51c0/2ab0e521-e089-497a-b03b-58d573d0c6d7.jpg?raw=true' },
    { title: 'EQUIPO DEPORTIVO', imageUrl: 'https://github.com/vita-lottie-characters/Hol/blob/ec6a2dc1a19f3332c06b59bdb5b525b865ef51c0/2dda2640-a21e-45c1-adac-a32a0072998e.jpg?raw=true' },
];