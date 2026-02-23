'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus,
  MapPin,
  Calendar,
  Clock,
  Award,
  TrendingUp,
  Recycle,
  Leaf,
  Droplet,
  TreesIcon as Tree,
  ChevronRight,
  Bell,
  User as UserIcon,
  Gift,
  Wallet,
  BookOpen,
  Flame,
  Sparkles,
  Truck,
  ArrowRight,
  BarChart3,
  Target
} from 'lucide-react';
import { PointsDisplay } from '@/components/user/PointsDisplay';
import { ImpactStats } from '@/components/user/ImpactStats';
import { PickupCard } from '@/components/user/PickupCard';
import { WasteCategoryCard } from '@/components/user/WasteCategoryCard';
import { Achievements } from '@/components/user/Achievements';
import { StatsDashboard } from '@/components/user/StatsDashboard';
import { DriverTracker } from '@/components/user/DriverTracker';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WASTE_TYPES } from '@/lib/constants';
import type { User, PickupRequest, WasteType, Achievement, Activity, Driver } from '@/lib/types';
import { formatDate } from '@/lib/utils';

// Mock user data
const mockUser: User = {
  id: 'U001',
  phoneNumber: '+2348012345678',
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  role: 'user',
  points: 3450,
  level: 'Gold Sorter',
  streak: 12,
  rank: 42,
  stats: {
    totalRecycled: 245.5,
    treesSaved: 12,
    waterSaved: 1500,
    co2Prevented: 65,
    pickupsCompleted: 24,
    thisMonth: 45.2,
    sortingAccuracy: 92
  },
  achievements: [],
  createdAt: new Date('2025-01-15'),
  updatedAt: new Date('2026-02-23')
};

const mockHousehold = {
  id: 'H001',
  address: '12 Adebayo Street, Lekki Phase 1, Lagos',
  stats: {
    totalRecycled: 245.5,
    sortingAccuracy: 92,
    pickupsCompleted: 24
  }
};

const mockAchievements: Achievement[] = [
  {
    id: '1',
    name: 'Perfect Week',
    description: 'Complete 7 pickups in one week',
    icon: '🌟',
    progress: 5,
    target: 7,
    completed: false
  },
  {
    id: '2',
    name: 'Eco Warrior',
    description: 'Recycle 500kg of waste',
    icon: '🌍',
    progress: 245,
    target: 500,
    completed: false
  },
  {
    id: '3',
    name: 'Gold Sorter',
    description: 'Achieve gold sorting quality 10 times',
    icon: '🥇',
    progress: 8,
    target: 10,
    completed: false,
    unlockedAt: new Date('2026-02-20')
  },
  {
    id: '4',
    name: 'Early Bird',
    description: 'Complete 5 morning pickups',
    icon: '🌅',
    progress: 5,
    target: 5,
    completed: true,
    unlockedAt: new Date('2026-02-15')
  }
];

const mockRecentActivity: Activity[] = [
  { 
    id: '1', 
    type: 'pickup', 
    description: 'Pickup completed - Gold quality', 
    points: 375, 
    date: new Date('2026-02-22'), 
    weight: '7.2 kg' 
  },
  { 
    id: '2', 
    type: 'bonus', 
    description: 'Perfect sorting bonus', 
    points: 50, 
    date: new Date('2026-02-22') 
  },
  { 
    id: '3', 
    type: 'pickup', 
    description: 'Pickup completed', 
    points: 246, 
    date: new Date('2026-02-21'), 
    weight: '8.5 kg' 
  },
  { 
    id: '4', 
    type: 'referral', 
    description: 'Referred a friend', 
    points: 100, 
    date: new Date('2026-02-20') 
  },
  { 
    id: '5', 
    type: 'reward', 
    description: 'Redeemed movie ticket', 
    points: -500, 
    date: new Date('2026-02-19') 
  }
];

const mockDrivers: Record<string, Driver> = {
  'D001': {
    id: 'D001',
    name: 'Segun Adeleke',
    phone: '08031234567',
    email: 'segun@example.com',
    vehicleType: 'Tricycle',
    licensePlate: 'LAG-1234',
    status: 'online',
    rating: 4.8,
    totalPickups: 156,
    eta: '15 mins',
    createdAt: new Date('2025-01-01')
  }
};

const mockPickups: PickupRequest[] = [
  {
    id: 'PK001',
    userId: 'U001',
    householdId: 'H001',
    address: '12 Adebayo Street, Lekki Phase 1, Lagos',
    scheduledDate: new Date('2026-02-22'),
    timeWindow: 'afternoon',
    status: 'completed',
    wasteTypes: [
      { wasteTypeId: 'pet', estimatedWeight: 5, actualWeight: 5.2 },
      { wasteTypeId: 'aluminum', estimatedWeight: 2.2, actualWeight: 2.1 }
    ],
    totalWeight: 7.3,
    pointsEarned: 375,
    driverId: 'D001',
    driver: mockDrivers['D001'],
    estimatedArrival: new Date('2026-02-22T14:30:00'),
    actualArrival: new Date('2026-02-22T14:25:00'),
    completionTime: new Date('2026-02-22T14:45:00'),
    notes: 'Gold quality sorting',
    createdAt: new Date('2026-02-21'),
    updatedAt: new Date('2026-02-22')
  },
  {
    id: 'PK002',
    userId: 'U001',
    householdId: 'H001',
    address: '12 Adebayo Street, Lekki Phase 1, Lagos',
    scheduledDate: new Date('2026-02-21'),
    timeWindow: 'morning',
    status: 'completed',
    wasteTypes: [
      { wasteTypeId: 'cardboard', estimatedWeight: 8.5, actualWeight: 8.3 }
    ],
    totalWeight: 8.3,
    pointsEarned: 246,
    driverId: 'D001',
    driver: mockDrivers['D001'],
    estimatedArrival: new Date('2026-02-21T09:30:00'),
    actualArrival: new Date('2026-02-21T09:20:00'),
    completionTime: new Date('2026-02-21T09:40:00'),
    createdAt: new Date('2026-02-20'),
    updatedAt: new Date('2026-02-21')
  },
  {
    id: 'PK003',
    userId: 'U001',
    householdId: 'H001',
    address: '12 Adebayo Street, Lekki Phase 1, Lagos',
    scheduledDate: new Date('2026-02-23'),
    timeWindow: 'afternoon',
    status: 'assigned',
    wasteTypes: [
      { wasteTypeId: 'pet', estimatedWeight: 3 },
      { wasteTypeId: 'glass_clear', estimatedWeight: 2 },
      { wasteTypeId: 'aluminum', estimatedWeight: 1.5 }
    ],
    totalWeight: 6.5,
    driverId: 'D001',
    driver: mockDrivers['D001'],
    estimatedArrival: new Date('2026-02-23T14:30:00'),
    createdAt: new Date('2026-02-22'),
    updatedAt: new Date('2026-02-23')
  }
];

export default function UserDashboardPage() {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState<PickupRequest | null>(null);
  const [showStats, setShowStats] = useState(false);

  // Get next upcoming pickup
  const nextPickup = mockPickups
    .filter(p => p.status === 'assigned' || p.status === 'en_route')
    .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime())[0] || null;

  const handleTrackDriver = (pickup: PickupRequest) => {
    setSelectedPickup(pickup);
    setIsTrackingOpen(true);
  };

  const userStats = {
    totalRecycled: mockHousehold.stats.totalRecycled,
    treesSaved: Math.floor(mockHousehold.stats.totalRecycled / 20),
    waterSaved: mockHousehold.stats.totalRecycled * 50,
    co2Prevented: Math.floor(mockHousehold.stats.totalRecycled * 2.5),
    pickupsCompleted: mockHousehold.stats.pickupsCompleted,
    thisMonth: 45.2,
    sortingAccuracy: mockHousehold.stats.sortingAccuracy
  };

  const getUserInitials = (name: string): string => {
    return name.split(' ').map((n: string) => n[0]).join('');
  };

  const getFirstName = (name: string): string => {
    return name.split(' ')[0];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1976D2] to-[#0D47A1] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {getUserInitials(mockUser.fullName)}
              </div>
              <div>
                <h1 className="text-lg font-semibold">Welcome back, {getFirstName(mockUser.fullName)}!</h1>
                <div className="flex items-center gap-2 text-xs">
                  <Badge variant="gold" className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Gold Sorter
                  </Badge>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">ID: {mockUser.id}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/user/notifications">
                <Button variant="ghost" size="sm" className="relative p-2">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
              </Link>
              <Link href="/user/profile">
                <Button variant="ghost" size="sm" className="p-2">
                  <UserIcon className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Welcome Banner */}
        {showWelcome && (
          <Card className="mb-6 bg-gradient-to-r from-[#1976D2] to-[#0D47A1] text-white overflow-hidden">
            <CardContent className="p-4 relative">
              <button 
                onClick={() => setShowWelcome(false)}
                className="absolute top-2 right-2 text-white/60 hover:text-white"
              >
                ✕
              </button>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold mb-1">You're on a 12-day streak! 🔥</h2>
                  <p className="text-sm text-white/80 mb-2">
                    Complete 3 more pickups this week to unlock bonus points
                  </p>
                  <Button variant="secondary" size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0">
                    View Challenges
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Points Display */}
        <PointsDisplay points={mockUser.points} showActions={false} />

        {/* Quick Stats Row */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-500">Streak</p>
            <p className="text-lg font-bold text-orange-600">12 🔥</p>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-500">Pickups</p>
            <p className="text-lg font-bold text-blue-600">{userStats.pickupsCompleted}</p>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-500">Recycled</p>
            <p className="text-lg font-bold text-green-600">{userStats.totalRecycled.toFixed(0)}kg</p>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-500">Accuracy</p>
            <p className="text-lg font-bold text-purple-600">{userStats.sortingAccuracy}%</p>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {[
            { id: 'schedule', label: 'Schedule', icon: Plus, color: 'bg-blue-500', href: '/user/schedule' },
            { id: 'dropoff', label: 'Drop-off', icon: MapPin, color: 'bg-green-500', href: '/user/dropoff' },
            { id: 'wallet', label: 'Wallet', icon: Wallet, color: 'bg-purple-500', href: '/user/wallet' },
            { id: 'rewards', label: 'Rewards', icon: Gift, color: 'bg-orange-500', href: '/user/rewards' },
            { id: 'stats', label: 'Stats', icon: BarChart3, color: 'bg-pink-500', href: '#', onClick: () => setShowStats(!showStats) }
          ].map((action) => {
            const Icon = action.icon;
            return (
              <div key={action.id} onClick={action.onClick as any} className="cursor-pointer">
                <div className="flex flex-col items-center p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <div className={`w-10 h-10 ${action.color} rounded-full flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-center font-medium text-gray-700">{action.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Dashboard */}
        {showStats && (
          <div className="mb-6">
            <StatsDashboard
              stats={userStats}
              achievements={mockAchievements}
              recentActivity={mockRecentActivity}
              streak={12}
              level="Gold Sorter"
              rank={42}
            />
          </div>
        )}

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Pickup - WITHOUT wrapping Link */}
{/* Next Pickup */}
{nextPickup && (
  <div>
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Truck className="w-5 h-5 text-[#1976D2]" />
        Next Pickup
      </h2>
      <Link href="/user/pickups" className="text-sm text-[#1976D2] hover:underline flex items-center gap-1">
        View all <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
    <div className="transform transition-transform hover:scale-[1.01] active:scale-[0.99]">
      <PickupCard 
        pickup={nextPickup} 
        onTrack={() => handleTrackDriver(nextPickup)}
      />
    </div>
  </div>
)}

            {/* Impact Stats */}
            <Link href="/user/impact" className="block">
              <div className="transform transition-transform hover:scale-[1.01] active:scale-[0.99]">
                <ImpactStats 
                  totalRecycled={userStats.totalRecycled}
                  treesSaved={userStats.treesSaved}
                  waterSaved={userStats.waterSaved}
                  co2Prevented={userStats.co2Prevented}
                />
              </div>
            </Link>

            {/* Popular Categories */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-[#1976D2]" />
                  Popular Categories
                </h2>
                <Link href="/user/education" className="text-sm text-[#1976D2] hover:underline flex items-center gap-1">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {WASTE_TYPES.slice(0, 4).map((waste) => (
                  <Link key={waste.id} href={`/user/education?category=${waste.id}`} className="block">
                    <div className="transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      <WasteCategoryCard wasteType={waste as WasteType} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#1976D2]" />
                    Recent Activity
                  </CardTitle>
                  <Link href="/user/wallet/transactions" className="text-sm text-[#1976D2] hover:underline flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockRecentActivity.slice(0, 3).map((activity) => (
                    <Link key={activity.id} href="/user/wallet/transactions" className="block">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === 'pickup' ? 'bg-green-100' :
                            activity.type === 'bonus' ? 'bg-purple-100' :
                            activity.type === 'referral' ? 'bg-blue-100' : 'bg-orange-100'
                          }`}>
                            {activity.type === 'pickup' && '♻️'}
                            {activity.type === 'bonus' && '🎁'}
                            {activity.type === 'referral' && '👥'}
                            {activity.type === 'reward' && '🎫'}
                          </div>
                          <div>
                            <p className="font-medium">{activity.description}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{formatDate(activity.date)}</span>
                              {activity.weight && (
                                <>
                                  <span>•</span>
                                  <span>{activity.weight}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className={`font-semibold ${
                          activity.points > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {activity.points > 0 ? '+' : ''}{activity.points} pts
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Streak Card */}
            <Link href="/user/challenges" className="block">
              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white transform transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-6 h-6" />
                      <span className="font-bold">12 Day Streak</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-75" />
                  </div>
                  <p className="text-sm text-white/80 mb-3">Keep it up! 3 more days for bonus</p>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Achievements */}
            <Achievements 
              achievements={mockAchievements}
              onViewAll={() => router.push('/user/achievements')}
            />

            {/* Monthly Progress */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#1976D2]" />
                  Monthly Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="font-bold">{userStats.thisMonth} kg / 100 kg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-[#1976D2] rounded-full h-2.5" style={{ width: '45%' }}></div>
                </div>
                <Link href="/user/stats">
                  <Button variant="outline" size="sm" fullWidth className="gap-2">
                    <Calendar className="w-4 h-4" />
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Tip */}
            <Link href="/user/education" className="block">
              <Card className="bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1976D2] p-2 rounded-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Quick Tip</h3>
                      <p className="text-sm text-gray-600">Rinse containers for 1.2x points! ✨</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Referral Card */}
            <Link href="/user/referrals" className="block">
              <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Refer a Friend</h3>
                    <Gift className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-white/80 mb-3">Get 50 points for each friend who joins</p>
                  <Button variant="secondary" size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0 w-full">
                    Invite Now
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      {/* Driver Tracker Modal */}
      <DriverTracker 
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        driver={selectedPickup?.driver || null}
        pickupId={selectedPickup?.id || ''}
      />

      {/* Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
        <div className="flex justify-around">
          <Link href="/user/dashboard" className="flex flex-col items-center text-[#1976D2]">
            <span className="text-xl">🏠</span>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/user/schedule" className="flex flex-col items-center text-gray-400 hover:text-[#1976D2]">
            <span className="text-xl">📅</span>
            <span className="text-xs mt-1">Schedule</span>
          </Link>
          <Link href="/user/wallet" className="flex flex-col items-center text-gray-400 hover:text-[#1976D2]">
            <span className="text-xl">💰</span>
            <span className="text-xs mt-1">Wallet</span>
          </Link>
          <Link href="/user/rewards" className="flex flex-col items-center text-gray-400 hover:text-[#1976D2]">
            <span className="text-xl">🎁</span>
            <span className="text-xs mt-1">Rewards</span>
          </Link>
          <Link href="/user/profile" className="flex flex-col items-center text-gray-400 hover:text-[#1976D2]">
            <span className="text-xl">👤</span>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Floating Action Button */}
      <Link href="/user/schedule">
        <button className="fixed right-4 bottom-20 lg:bottom-4 w-14 h-14 bg-[#1976D2] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#1565C0] transition-colors z-20">
          <Plus className="w-6 h-6" />
        </button>
      </Link>
    </div>
  );
}