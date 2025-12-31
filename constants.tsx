
import React from 'react';
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 500,
    features: [
      'Access to main tournament floor',
      'Complimentary Weisswurst brunch',
      'Standard seating',
      'Opening ceremony access'
    ],
    color: 'bg-orange-800'
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 2500,
    features: [
      'Reserved mezzanine seating',
      'Private bar access',
      'Commemorative Stuttgart deck',
      'Strategy session with a Pro',
      'VIP lounge access'
    ],
    color: 'bg-slate-400'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 10000,
    features: [
      'Front row center table assignment',
      'Personal concierge service',
      'Private dinner with tournament directors',
      'Custom gold-plated dealer button',
      'Limousine transport within Stuttgart',
      'Entry into the high-roller side event'
    ],
    color: 'bg-yellow-600'
  }
];

export const PAST_CHAMPIONS = [
  {
    name: "Mike David",
    rank: 10,
    bio: "Mike has been playing Euchre since he was 2. His Father had a dream for Mike to become the best Euchre player in history, and Mike was all in on that dream. He credits his top 10 world ranking on his ability to table talk without anyone knowing he's doing it. He's turned table talk into an art. Mike fully admits he can't hit a golf ball worth a damn, but if you give him two jacks, no one can beat him.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kevin Grayling",
    rank: 4,
    bio: "Kevin, a former Tottenham star forward, shifted his attention away from football to Euchre in the late 90's. He was born with one of his thighs attached to his ball sack and his parent refused to get it fixed. In the end, it allowed Kevin to load up more effectively on his right side and deliver kicks that always found the net. He shifted to Euchre when he realized his hands were smaller than a Lemur's and they were perfect for holding cards. He's currently ranked number 4 in the world.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "John \"Grip\" Griparis",
    rank: 7,
    bio: "John was on the wrong side of the law in the early 2000's. No one knows for sure, but rumor has it that he was caught red handed outside a Dollar Store pretending to be a gynecologist and offering breast exams for free. One of the women got suspicious when he claimed that an important follow up procedure was required. He called it a motor boat. With that said, he's one of the best players in the world and his current rank of 7 proves that out. Let's hope he's gotten some help for his obsession with boobies.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Mike Kay",
    rank: 8,
    bio: "Even though he's still ranked number 8 in the world, Mike is now the head pro at Stuttgart Country Club. It's the only course in the world that would hire a golf pro that can't hit a driver off the tee. His infectious smile and constant need for attention make him the perfect club pro in Germany. Everyone wants to partner with Mr. Kay, especially Mike David. Two words, Table and Talk.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800"
  }
];

export const SUCRE_MODELS = {
    TEXT: 'gemini-3-flash-preview'
};
