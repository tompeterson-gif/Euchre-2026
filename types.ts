
export interface RegistrationData {
  firstName: string;
  lastName: string;
  sucreNickname: string;
  hometown: string;
  worldRanking: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
}

export enum Page {
  Home = 'home',
  Pricing = 'pricing',
  Registration = 'registration',
  Golf = 'golf',
  Champions = 'champions'
}
