'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  PieChart, 
  Download,
  ChevronDown,
  Award,
  Flame,
  Target,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { UserStats, Achievement, Activity } from '@/lib/types';

interface StatsDashboardProps {
  stats: UserStats;
  achievements: Achievement[];
  recentActivity: Activity[];
  streak: number;
  level: string;
  rank: number;
  className?: string;
}

export function StatsDashboard({ 
  stats,
  achievements,
  recentActivity,
  streak,
  level,
  rank,
  className = '' 
}: StatsDashboardProps) {
  
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');
  const [showExportMenu, setShowExportMenu] = useState(false);

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [12, 19, 15, 22, 24, 18, 14]
  };

  const categoryData = [
    { name: 'Plastics', value: 45, color: '#1976D2' },
    { name: 'Glass', value: 20, color: '#4CAF50' },
    { name: 'Paper', value: 25, color: '#FFC107' },
    { name: 'Metals', value: 10, color: '#9C27B0' }
  ];

  const handleExport = (format: 'csv' | 'pdf' | 'json') => {
    console.log(`Exporting as ${format}...`);
    setShowExportMenu(false);
  };

  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'pickup': return 'success';
      case 'bonus': return 'warning';
      case 'reward': return 'default';
      case 'referral': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-[#1976D2]" />
          Your Impact Statistics
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-lg border border-gray-200">
            {(['week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                  timeRange === range
                    ? 'bg-[#1976D2] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${range === 'week' ? 'rounded-l-lg' : ''} ${range === 'year' ? 'rounded-r-lg' : ''}`}
              >
                {range}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Export
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {(['csv', 'pdf', 'json'] as const).map((format) => (
                  <button
                    key={format}
                    onClick={() => handleExport(format)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg capitalize"
                  >
                    Export as {format.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <Badge variant="warning">Active</Badge>
            </div>
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-xs text-gray-500">Day Streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <p className="text-2xl font-bold">{level}</p>
            <p className="text-xs text-gray-500">Current Level</p>
            <p className="text-xs text-gray-400 mt-1">Rank #{rank}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-2xl font-bold">{stats.pickupsCompleted}</p>
            <p className="text-xs text-gray-500">Total Pickups</p>
            <p className="text-xs text-green-600 mt-1">+{stats.thisMonth} this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-2xl font-bold">{stats.totalRecycled.toFixed(1)} kg</p>
            <p className="text-xs text-gray-500">Total Recycled</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#1976D2]" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {weeklyData.labels.map((label, i) => (
                <div key={label} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-blue-100 rounded-t-lg relative group">
                    <div 
                      className="bg-[#1976D2] rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                      style={{ height: `${(weeklyData.values[i] / 30) * 200}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {weeklyData.values[i]} kg
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Waste Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChart className="w-5 h-5 text-[#1976D2]" />
              Waste Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm flex-1">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#1976D2]" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Activity</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Points</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">
                      {new Date(activity.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium">
                      {activity.description}
                      {activity.weight && (
                        <span className="text-xs text-gray-500 ml-2">({activity.weight})</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={getBadgeVariant(activity.type)}>
                        {activity.type}
                      </Badge>
                    </td>
                    <td className={`py-3 px-4 text-right font-medium ${
                      activity.points > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {activity.points > 0 ? '+' : ''}{activity.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}