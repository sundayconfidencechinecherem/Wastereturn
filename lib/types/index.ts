// lib/types/index.ts

export type UserRole = 'user' | 'driver' | 'admin' | 'estate_manager';

export interface UserStats {
  totalRecycled: number;
  treesSaved: number;
  waterSaved: number;
  co2Prevented: number;
  pickupsCompleted: number;
  thisMonth: number;
  sortingAccuracy: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  target: number;
  completed: boolean;
  unlockedAt?: Date;
}

export interface Activity {
  id: string;
  type: 'pickup' | 'bonus' | 'reward' | 'referral' | 'dropoff';
  description: string;
  points: number;
  date: Date;
  weight?: string;
}

export interface User {
  id: string;
  phoneNumber: string;
  fullName: string;
  email?: string;
  role: UserRole;
  householdId?: string;
  points: number;
  level: string;
  streak: number;
  rank: number;
  stats: UserStats;
  achievements: Achievement[];
  zgTxHash?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Household {
  id: string;
  address: string;
  latitude?: number;
  longitude?: number;
  qrCode: string;
  members: User[];
  preferences: {
    preferredPickupTime?: string;
    contactMethod: 'sms' | 'whatsapp' | 'both';
    notes?: string;
  };
  stats: {
    totalRecycled: number;
    sortingAccuracy: number;
    pickupsCompleted: number;
  };
}

export type WasteCategory = 'recyclable' | 'organic' | 'hazardous' | 'residual' | 'electronic';

export type MaterialType = 
  | 'pet' | 'hdpe' | 'ldpe' | 'pp' | 'ps'
  | 'aluminum' | 'tin' | 'steel' | 'copper'
  | 'cardboard' | 'office_paper' | 'newspaper' | 'mixed_paper'
  | 'glass_clear' | 'glass_colored'
  | 'electronics' | 'batteries'
  | 'textiles' | 'organic_food' | 'organic_yard';

export type SortingQuality = 'gold' | 'silver' | 'bronze' | 'mixed' | 'contaminated';

export interface WasteType {
  id: string;
  name: string;
  category: WasteCategory;
  materialType?: MaterialType;
  basePointsPerKg: number;
  icon: string;
  description: string;
  sortingInstructions: string[];
  preparationTips: string[];
  accepted: boolean;
  requiresSpecialHandling: boolean;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  email?: string;
  vehicleType: string;
  licensePlate: string;
  status: 'online' | 'offline' | 'on_route' | 'on_pickup';
  currentLocation?: {
    lat: number;
    lng: number;
  };
  eta?: string;
  rating: number;
  totalPickups: number;
  todayPickups?: number;
  todayEarnings?: number;
  zgTxHash?: string;
  createdAt: Date;
}

export type PickupStatus = 
  | 'pending' | 'assigned' | 'en_route' | 'arrived' 
  | 'completed' | 'cancelled' | 'rescheduled';

export type PickupTimeWindow = 'morning' | 'afternoon' | 'evening';

// In lib/types/index.ts, around line 120-130
export interface PickupRequest {
  id: string;
  userId: string;
  householdId: string;
  address: string;  // Make sure this exists!
  scheduledDate: Date;
  timeWindow: PickupTimeWindow;
  status: PickupStatus;
  wasteTypes: Array<{
    wasteTypeId: string;
    estimatedWeight: number;
    actualWeight?: number;
  }>;
  totalWeight?: number;
  pointsEarned?: number;
  driverId?: string;
  driver?: Driver;
  estimatedArrival?: Date;
  actualArrival?: Date;
  completionTime?: Date;
  notes?: string;
  zgTxHash?: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface PointsLedger {
  id: string;
  userId: string;
  transactionId?: string;
  amount: number;
  type: 'credit' | 'debit';
  reason: 'pickup' | 'dropoff' | 'bonus' | 'redemption' | 'cashout' | 'referral';
  balance: number;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  category: 'cash' | 'bill_payment' | 'gift_card' | 'merchandise' | 'charity';
  imageUrl?: string;
  available: boolean;
  expiresAt?: Date;
}

export const SORTING_QUALITY_MULTIPLIERS: Record<SortingQuality, number> = {
  gold: 1.5,
  silver: 1.3,
  bronze: 1.1,
  mixed: 1.0,
  contaminated: 0.5
};

export const POINTS_CONVERSION_RATE = 2; // 2 points = ₦1