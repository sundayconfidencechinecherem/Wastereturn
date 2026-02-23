'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft,
  Award,
  Medal,
  Trophy,
  Star,
  Zap,
  Target,
  TrendingUp,
  Calendar,
  Lock,
  ChevronRight,
  Sparkles,
  Flame,
  Leaf,
  Recycle,
  Droplet,
  TreesIcon as Tree,
  Heart,
  Share2,
  Gift,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';

// Mock achievements data
const mockAchievements = {
  stats: {
    totalPoints: 3450,
    level: 'Gold Sorter',
    rank: 42,
    achievementsCompleted: 12,
    totalAchievements: 24,
    streak: 12,
    nextLevel: 'Platinum Sorter',
    nextLevelProgress: 65
  },
  categories: [
    { id: 'all', name: 'All', count: 24 },
    { id: 'recycling', name: 'Recycling', count: 8 },
    { id: 'streaks', name: 'Streaks', count: 4 },
    { id: 'quality', name: 'Quality', count: 6 },
    { id: 'special', name: 'Special', count: 6 }
  ],
  achievements: [
    {
      id: 1,
      name: 'Eco Warrior',
      description: 'Recycle 500kg of waste',
      category: 'recycling',
      icon: '🌍',
      progress: 245,
      target: 500,
      completed: false,
      rarity: 'legendary',
      points: 500,
      unlockedAt: null,
      steps: [
        { description: 'Recycle 100kg', completed: true },
        { description: 'Recycle 250kg', completed: true },
        { description: 'Recycle 500kg', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Perfect Week',
      description: 'Complete 7 pickups in one week',
      category: 'streaks',
      icon: '🌟',
      progress: 5,
      target: 7,
      completed: false,
      rarity: 'epic',
      points: 300,
      unlockedAt: null,
      steps: [
        { description: 'Complete 3 pickups', completed: true },
        { description: 'Complete 5 pickups', completed: true },
        { description: 'Complete 7 pickups', completed: false }
      ]
    },
    {
      id: 3,
      name: 'Gold Sorter',
      description: 'Achieve gold sorting quality 10 times',
      category: 'quality',
      icon: '🥇',
      progress: 8,
      target: 10,
      completed: false,
      rarity: 'rare',
      points: 250,
      unlockedAt: new Date('2026-02-20'),
      steps: [
        { description: 'Get gold quality 3 times', completed: true },
        { description: 'Get gold quality 6 times', completed: true },
        { description: 'Get gold quality 10 times', completed: false }
      ]
    },
    {
      id: 4,
      name: 'Early Bird',
      description: 'Complete 5 morning pickups',
      category: 'special',
      icon: '🌅',
      progress: 5,
      target: 5,
      completed: true,
      rarity: 'common',
      points: 100,
      unlockedAt: new Date('2026-02-15'),
      steps: [
        { description: 'Complete 2 morning pickups', completed: true },
        { description: 'Complete 4 morning pickups', completed: true },
        { description: 'Complete 5 morning pickups', completed: true }
      ]
    },
    {
      id: 5,
      name: 'Water Saver',
      description: 'Save 10,000 liters of water',
      category: 'recycling',
      icon: '💧',
      progress: 12275,
      target: 10000,
      completed: true,
      rarity: 'epic',
      points: 400,
      unlockedAt: new Date('2026-02-10'),
      steps: [
        { description: 'Save 3,000L', completed: true },
        { description: 'Save 6,000L', completed: true },
        { description: 'Save 10,000L', completed: true }
      ]
    },
    {
      id: 6,
      name: 'Tree Planter',
      description: 'Save 20 trees through recycling',
      category: 'recycling',
      icon: '🌳',
      progress: 12,
      target: 20,
      completed: false,
      rarity: 'rare',
      points: 300,
      unlockedAt: null,
      steps: [
        { description: 'Save 5 trees', completed: true },
        { description: 'Save 10 trees', completed: true },
        { description: 'Save 20 trees', completed: false }
      ]
    },
    {
      id: 7,
      name: 'Streak Master',
      description: 'Maintain a 30-day streak',
      category: 'streaks',
      icon: '🔥',
      progress: 12,
      target: 30,
      completed: false,
      rarity: 'legendary',
      points: 1000,
      unlockedAt: null,
      steps: [
        { description: '7-day streak', completed: true },
        { description: '14-day streak', completed: true },
        { description: '30-day streak', completed: false }
      ]
    },
    {
      id: 8,
      name: 'Perfect Sorter',
      description: 'Get gold quality on 5 consecutive pickups',
      category: 'quality',
      icon: '✨',
      progress: 3,
      target: 5,
      completed: false,
      rarity: 'epic',
      points: 500,
      unlockedAt: null,
      steps: [
        { description: '2 in a row', completed: true },
        { description: '4 in a row', completed: true },
        { description: '5 in a row', completed: false }
      ]
    },
    {
      id: 9,
      name: 'Community Hero',
      description: 'Refer 10 friends to WasteReturn',
      category: 'special',
      icon: '👥',
      progress: 4,
      target: 10,
      completed: false,
      rarity: 'epic',
      points: 600,
      unlockedAt: null,
      steps: [
        { description: 'Refer 3 friends', completed: true },
        { description: 'Refer 6 friends', completed: true },
        { description: 'Refer 10 friends', completed: false }
      ]
    },
    {
      id: 10,
      name: 'Century Club',
      description: 'Complete 100 pickups',
      category: 'recycling',
      icon: '🏆',
      progress: 24,
      target: 100,
      completed: false,
      rarity: 'legendary',
      points: 1000,
      unlockedAt: null,
      steps: [
        { description: '25 pickups', completed: true },
        { description: '50 pickups', completed: false },
        { description: '100 pickups', completed: false }
      ]
    }
  ],
  recentUnlocks: [
    { id: 101, name: 'Water Saver', icon: '💧', unlockedAt: '2 days ago' },
    { id: 102, name: 'Early Bird', icon: '🌅', unlockedAt: '5 days ago' },
    { id: 103, name: 'Gold Sorter', icon: '🥇', unlockedAt: '1 week ago' }
  ],
  nextRewards: [
    { name: 'Tree Planter', progress: 12, target: 20, points: 300 },
    { name: 'Streak Master', progress: 12, target: 30, points: 1000 },
    { name: 'Perfect Sorter', progress: 3, target: 5, points: 500 }
  ]
};

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCompleted, setShowCompleted] = useState(true);

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch(rarity) {
      case 'common': return <Badge variant="default" className="bg-gray-500">Common</Badge>;
      case 'rare': return <Badge variant="default" className="bg-blue-500">Rare</Badge>;
      case 'epic': return <Badge variant="default" className="bg-purple-500">Epic</Badge>;
      case 'legendary': return <Badge variant="default" className="bg-yellow-500">Legendary</Badge>;
      default: return null;
    }
  };

  const filteredAchievements = mockAchievements.achievements.filter(ach => {
    if (selectedCategory !== 'all' && ach.category !== selectedCategory) return false;
    if (!showCompleted && ach.completed) return false;
    return true;
  });

  const completedCount = mockAchievements.achievements.filter(a => a.completed).length;
  const progressPercentage = (completedCount / mockAchievements.achievements.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/user/dashboard">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Achievements</h1>
              <p className="text-sm text-gray-500">Track your badges and rewards</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Completed</p>
                  <p className="text-xl font-bold">{completedCount}/{mockAchievements.achievements.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Points</p>
                  <p className="text-xl font-bold">{mockAchievements.stats.totalPoints}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Flame className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Current Streak</p>
                  <p className="text-xl font-bold">{mockAchievements.stats.streak} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Global Rank</p>
                  <p className="text-xl font-bold">#{mockAchievements.stats.rank}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#1976D2]" />
                <span className="font-semibold">{mockAchievements.stats.level}</span>
              </div>
              <span className="text-sm text-gray-500">Next: {mockAchievements.stats.nextLevel}</span>
            </div>
            <Progress value={mockAchievements.stats.nextLevelProgress} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">
              {mockAchievements.stats.nextLevelProgress}% complete • Need 1,200 more points
            </p>
          </CardContent>
        </Card>

        {/* Recent Unlocks */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1976D2]" />
              Recent Unlocks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {mockAchievements.recentUnlocks.map((item) => (
                <div key={item.id} className="flex-none text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl mb-2">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.unlockedAt}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {mockAchievements.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1976D2] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
          
          <div className="flex gap-2 ml-auto">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="px-3"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="px-3"
            >
              List
            </Button>
          </div>
        </div>

        {/* Show Completed Toggle */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {showCompleted ? '✓ Showing Completed' : '○ Hiding Completed'}
          </button>
          <span className="text-sm text-gray-500">
            {filteredAchievements.length} achievements
          </span>
        </div>

        {/* Achievements Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`overflow-hidden transition-all hover:shadow-lg ${
                  achievement.completed ? 'border-green-200 bg-green-50/30' : ''
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${getRarityColor(achievement.rarity)}`} />
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                      achievement.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{achievement.name}</h3>
                          <p className="text-xs text-gray-500">{achievement.description}</p>
                        </div>
                        {getRarityBadge(achievement.rarity)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {achievement.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {step.completed && <CheckCircle className="w-3 h-3 text-white" />}
                        </div>
                        <span className={step.completed ? 'text-gray-900' : 'text-gray-500'}>
                          {step.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{achievement.points} pts</span>
                      </div>
                      {achievement.completed ? (
                        <Badge variant="success" className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </Badge>
                      ) : (
                        <Badge variant="warning">In Progress</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredAchievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                      achievement.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{achievement.name}</h3>
                          <p className="text-sm text-gray-500">{achievement.description}</p>
                        </div>
                        {getRarityBadge(achievement.rarity)}
                      </div>
                      
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">
                            {achievement.progress}/{achievement.target}
                          </span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.target) * 100} 
                          className="h-2"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between mt-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{achievement.points} pts</span>
                        </div>
                        {achievement.completed && achievement.unlockedAt && (
                          <div className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">
                              {new Date(achievement.unlockedAt).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Next Rewards Preview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#1976D2]" />
              Next Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockAchievements.nextRewards.map((reward, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-2">
                    <span className="text-sm font-medium">{reward.name}</span>
                  </div>
                  <Progress value={(reward.progress / reward.target) * 100} className="h-2 mb-1" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{reward.progress}/{reward.target}</span>
                    <span>{reward.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Share Button */}
        <div className="fixed bottom-20 right-4 lg:bottom-4">
          <Button 
            variant="primary" 
            className="rounded-full w-12 h-12 p-0 shadow-lg"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'My WasteReturn Achievements',
                  text: `I've unlocked ${completedCount} achievements on WasteReturn!`,
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}