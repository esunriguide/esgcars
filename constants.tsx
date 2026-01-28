
import React from 'react';
import { Car, CarType } from './types';

export const COLORS = {
  primary: '#800080', // Purple
  secondary: '#2f004f', // Deep Purple
  accent: '#9370DB', // Lavender
  success: '#00b894',
  price: '#009432'
};

export interface Brand {
  id: string;
  name: string;
  imageUrl: string;
}

export const TOP_BRANDS: Brand[] = [
  { id: 'toyota', name: 'Toyota', imageUrl: 'https://www.carlogos.org/car-logos/toyota-logo-2020-640.png' },
  { id: 'lexus', name: 'Lexus', imageUrl: 'https://www.carlogos.org/car-logos/lexus-logo-2022-640.png' },
  { id: 'mercedes', name: 'Mercedes-Benz', imageUrl: 'https://www.carlogos.org/car-logos/mercedes-benz-logo-2011-640.png' },
  { id: 'honda', name: 'Honda', imageUrl: 'https://www.carlogos.org/car-logos/honda-logo-2000-640.png' },
  { id: 'ford', name: 'Ford', imageUrl: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png' },
  { id: 'hyundai', name: 'Hyundai', imageUrl: 'https://www.carlogos.org/car-logos/hyundai-logo-2011-640.png' },
  { id: 'kia', name: 'Kia', imageUrl: 'https://www.carlogos.org/car-logos/kia-logo-2021-640.png' },
  { id: 'nissan', name: 'Nissan', imageUrl: 'https://www.carlogos.org/car-logos/nissan-logo-2020-640.png' },
];

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    name: 'Toyota Prado 2020, White',
    price: 51250000,
    description: 'Very neat and reliable Toyota Prado 2020, smooth engine, buy and drive, available in Lagos for inspection.',
    location: 'Ikeja, Lagos',
    type: CarType.NEW,
    imageUrl: 'https://picsum.photos/seed/prado/400/300',
    badge: '5★ Verified'
  },
  {
    id: '2',
    name: 'Lexus RX 300 2004, Gray',
    price: 5250000,
    description: 'Well-maintained Lexus RX 300 in perfect condition. Foreign used and ready to drive home with zero issues.',
    location: 'Surulere, Lagos',
    type: CarType.LOCAL_USED,
    imageUrl: 'https://picsum.photos/seed/lexus/400/300',
    badge: '4★ Dealer'
  },
  {
    id: '3',
    name: 'Mercedes-Benz C Class 2014, Red',
    price: 8750000,
    description: 'GLE 450 AMG Model, very clean, buy and travel. No issues, perfect AC, leather interior, clean title.',
    location: 'Lekki, Lagos',
    type: CarType.FOREIGN_USED,
    imageUrl: 'https://picsum.photos/seed/benz/400/300',
    badge: '5★ Verified'
  },
  {
    id: '4',
    name: 'Honda Accord 2018, Black',
    price: 12800000,
    description: 'Neatly used Honda Accord 2018 model, full option, reverse camera, sound engine and clean body.',
    location: 'Abuja',
    type: CarType.LOCAL_USED,
    imageUrl: 'https://picsum.photos/seed/honda/400/300',
    badge: '4★ Dealer'
  },
  {
    id: '5',
    name: 'Toyota Camry 2019, Silver',
    price: 15200000,
    description: 'Super clean Toyota Camry 2019, push start, chilling AC, and available for inspection in Port Harcourt.',
    location: 'Port Harcourt',
    type: CarType.NEW,
    imageUrl: 'https://picsum.photos/seed/camry/400/300',
    badge: '5★ Verified'
  },
  {
    id: '6',
    name: 'Range Rover Sport 2016, White',
    price: 38900000,
    description: 'Foreign used, clean interior, accident-free and fully functional engine.',
    location: 'Victoria Island',
    type: CarType.FOREIGN_USED,
    imageUrl: 'https://picsum.photos/seed/range/400/300',
    badge: '5★ Verified'
  }
];
