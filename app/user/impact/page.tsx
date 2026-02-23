'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft,
  Leaf,
  Droplet,
  TreesIcon as Tree,
  Wind,
  Recycle,
  Award,
  TrendingUp,
  Calendar,
  Share2,
  Download,
  ChevronRight,
  Globe,
  Zap,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Mock data - replace with real data from API/0G
const mockImpactData = {
  totalRecycled: 245.5, // kg
  treesSaved: 12,
  waterSaved: 12275, // liters (50L per kg)
  co2Prevented: 613.75, // kg (2.5kg per kg)
  energySaved: 980, // kWh
  oilSaved: 52, // gallons
  landfillSpace: 1.2, // cubic meters
  monthlyBreakdown: [
    { month: 'Jan', amount: 18.5 },
    { month: 'Feb', amount: 22.3 },
    { month: 'Mar', amount: 19.8 },
    { month: 'Apr', amount: 25.1 },
    { month: 'May', amount: 28.4 },
    { month: 'Jun', amount: 32.7 },
    { month: 'Jul', amount: 35.2 },
    { month: 'Aug', amount: 30.5 },
    { month: 'Sep', amount: 0 },
    { month: 'Oct', amount: 0 },
    { month: 'Nov', amount: 0 },
    { month: 'Dec', amount: 0 }
  ],
  categoryBreakdown: [
    { category: 'Plastics', amount: 85.3, percentage: 35 },
    { category: 'Paper', amount: 62.1, percentage: 25 },
    { category: 'Glass', amount: 41.2, percentage: 17 },
    { category: 'Metals', amount: 32.5, percentage: 13 },
    { category: 'Electronics', amount: 24.4, percentage: 10 }
  ],
  achievements: [
    { id: 1, name: 'Eco Novice', description: 'Recycle 100kg', progress: 245, target: 100, completed: true },
    { id: 2, name: 'Water Saver', description: 'Save 10,000L water', progress: 12275, target: 10000, completed: true },
    { id: 3, name: 'Tree Planter', description: 'Save 20 trees', progress: 12, target: 20, completed: false },
    { id: 4, name: 'Carbon Reducer', description: 'Prevent 1 ton CO2', progress: 0.61, target: 1, completed: false }
  ],
  comparisons: {
    averageUser: 180,
    topUser: 850,
    communityTotal: 15200
  }
};

export default function ImpactPage() {
  const [timeRange, setTimeRange] = useState<'year' | 'all'>('year');

  const formatNumber = (num: number): string => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 1 });
  };

  const getProgressPercentage = (current: number, target: number): number => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: 'My WasteReturn Impact',
        text: `I've recycled ${mockImpactData.totalRecycled}kg of waste, saving ${mockImpactData.treesSaved} trees and ${mockImpactData.waterSaved}L of water!`,
        url: window.location.href,
      });
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    // Generate CSV
    const headers = ['Metric', 'Value', 'Unit'];
    const data = [
      ['Total Recycled', mockImpactData.totalRecycled, 'kg'],
      ['Trees Saved', mockImpactData.treesSaved, 'trees'],
      ['Water Saved', mockImpactData.waterSaved, 'L'],
      ['CO₂ Prevented', mockImpactData.co2Prevented, 'kg'],
      ['Energy Saved', mockImpactData.energySaved, 'kWh'],
      ['Oil Saved', mockImpactData.oilSaved, 'gallons'],
      ['Landfill Space', mockImpactData.landfillSpace, 'm³'],
    ];
    
    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `impact-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

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
              <h1 className="text-xl font-bold">Your Environmental Impact</h1>
              <p className="text-sm text-gray-500">See how you're helping the planet</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Leaf className="w-8 h-8 opacity-80" />
                <Badge variant="default" className="bg-white/20 text-white border-0">
                  Total
                </Badge>
              </div>
              <p className="text-3xl font-bold">{formatNumber(mockImpactData.totalRecycled)} kg</p>
              <p className="text-sm opacity-90 mt-1">Waste Recycled</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Droplet className="w-8 h-8 opacity-80" />
                <Badge variant="default" className="bg-white/20 text-white border-0">
                  Saved
                </Badge>
              </div>
              <p className="text-3xl font-bold">{formatNumber(mockImpactData.waterSaved)} L</p>
              <p className="text-sm opacity-90 mt-1">Water Saved</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Wind className="w-8 h-8 opacity-80" />
                <Badge variant="default" className="bg-white/20 text-white border-0">
                  Prevented
                </Badge>
              </div>
              <p className="text-3xl font-bold">{formatNumber(mockImpactData.co2Prevented)} kg</p>
              <p className="text-sm opacity-90 mt-1">CO₂ Emissions</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <Button onClick={handleShare} variant="outline" className="flex-1 gap-2">
            <Share2 className="w-4 h-4" />
            Share Impact
          </Button>
          <Button onClick={handleDownload} variant="outline" className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>

        {/* Main Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-[#1976D2]" />
                Key Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-2">
                  <Tree className="w-5 h-5 text-green-600" />
                  <span>Trees Saved</span>
                </div>
                <span className="font-bold text-lg">{mockImpactData.treesSaved}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span>Energy Saved</span>
                </div>
                <span className="font-bold text-lg">{formatNumber(mockImpactData.energySaved)} kWh</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Oil Saved</span>
                </div>
                <span className="font-bold text-lg">{formatNumber(mockImpactData.oilSaved)} gallons</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-purple-600" />
                  <span>Landfill Space</span>
                </div>
                <span className="font-bold text-lg">{formatNumber(mockImpactData.landfillSpace)} m³</span>
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Recycle className="w-5 h-5 text-[#1976D2]" />
                Waste Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockImpactData.categoryBreakdown.map((cat) => (
                <div key={cat.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{cat.category}</span>
                    <span className="font-medium">{cat.amount} kg ({cat.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#1976D2] rounded-full h-2"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Monthly Progress Chart */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1976D2]" />
                Monthly Progress
              </CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant={timeRange === 'year' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setTimeRange('year')}
                >
                  This Year
                </Button>
                <Button 
                  variant={timeRange === 'all' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setTimeRange('all')}
                >
                  All Time
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-1">
              {mockImpactData.monthlyBreakdown.map((month, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-blue-100 rounded-t-lg relative group">
                    <div 
                      className="bg-[#1976D2] rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                      style={{ height: `${(month.amount / 40) * 200}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {month.amount} kg
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{month.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-[#1976D2]" />
              Impact Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockImpactData.achievements.map((achievement) => {
              const progress = getProgressPercentage(
                achievement.completed ? achievement.target : achievement.progress,
                achievement.target
              );
              
              return (
                <div key={achievement.id} className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    achievement.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {achievement.completed ? '✅' : '🎯'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{achievement.name}</p>
                      <span className="text-xs text-gray-500">
                        {achievement.completed ? achievement.target : achievement.progress}/{achievement.target}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{achievement.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`rounded-full h-2 ${
                          achievement.completed ? 'bg-green-500' : 'bg-[#1976D2]'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Community Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#1976D2]" />
              Community Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1976D2]">{formatNumber(mockImpactData.comparisons.averageUser)} kg</p>
                <p className="text-xs text-gray-500">Average User</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{formatNumber(mockImpactData.totalRecycled)} kg</p>
                <p className="text-xs text-gray-500">Your Impact</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{formatNumber(mockImpactData.comparisons.topUser)} kg</p>
                <p className="text-xs text-gray-500">Top User</p>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-[#1976D2]">
                    You're in the top 25%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#1976D2]">
                    {Math.round((mockImpactData.totalRecycled / mockImpactData.comparisons.topUser) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${(mockImpactData.totalRecycled / mockImpactData.comparisons.topUser) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1976D2]"
                />
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center mt-4">
              Together, our community has recycled {formatNumber(mockImpactData.comparisons.communityTotal)} kg of waste! 🎉
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}