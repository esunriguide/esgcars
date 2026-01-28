
export enum CarType {
  NEW = 'New',
  FOREIGN_USED = 'Foreign Used',
  LOCAL_USED = 'Local Used'
}

export interface Car {
  id: string;
  name: string;
  price: number;
  description: string;
  location: string;
  type: CarType;
  imageUrl: string;
  badge: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'user' | 'dealer' | 'admin';
}
