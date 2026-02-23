'use client';

import { Leaf, Droplet, TreesIcon as Tree, Wind } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface ImpactStatsProps {
  totalRecycled: number;
  treesSaved: number;
  waterSaved: number;
  co2Prevented: number;
  className?: string;
}

export function ImpactStats({ 
  totalRecycled, 
  treesSaved, 
  waterSaved, 
  co2Prevented,
  className = '' 
}: ImpactStatsProps) {
  
  const stats = [
    {
      label: 'Total Recycled',
      value: `${totalRecycled.toFixed(1)} kg`,
      icon: Leaf,
      color: 'bg-green-100 text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Trees Saved',
      value: treesSaved,
      icon: Tree,
      color: 'bg-emerald-100 text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      label: 'Water Saved',
      value: `${waterSaved.toLocaleString()} L`,
      icon: Droplet,
      color: 'bg-blue-100 text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'CO₂ Prevented',
      value: `${co2Prevented} kg`,
      icon: Wind,
      color: 'bg-purple-100 text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}