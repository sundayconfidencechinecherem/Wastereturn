'use client';

import { Award, ChevronRight, Sparkles, Trophy, Medal, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Achievement } from '@/lib/types';

interface AchievementsProps {
  achievements: Achievement[];
  showViewAll?: boolean;
  onViewAll?: () => void;
  className?: string;
}

export function Achievements({ 
  achievements, 
  showViewAll = true,
  onViewAll,
  className = '' 
}: AchievementsProps) {
  
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case '🌟': return Sparkles;
      case '🌍': return Trophy;
      case '🥇': return Medal;
      default: return Target;
    }
  };

  const getProgressColor = (progress: number, target: number) => {
    const percentage = (progress / target) * 100;
    if (percentage >= 100) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  const completedCount = achievements.filter(a => a.completed).length;

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="w-5 h-5 text-[#1976D2]" />
            Achievements
            <Badge variant="gold" className="ml-2">
              {completedCount}/{achievements.length}
            </Badge>
          </CardTitle>
          {showViewAll && (
            <button 
              onClick={onViewAll}
              className="text-sm text-[#1976D2] hover:underline flex items-center gap-1"
            >
              View all <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {achievements.map((achievement) => {
          const progressPercentage = (achievement.progress / achievement.target) * 100;
          
          return (
            <div key={achievement.id} className="group">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  achievement.completed 
                    ? 'bg-yellow-100 text-yellow-600' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">{achievement.name}</p>
                    <span className="text-xs text-gray-500">
                      {achievement.progress}/{achievement.target}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{achievement.description}</p>
                  <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
                        getProgressColor(achievement.progress, achievement.target)
                      }`}
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                  </div>
                  {achievement.completed && achievement.unlockedAt && (
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Completed! {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              {achievement.id !== achievements[achievements.length - 1].id && (
                <div className="border-b border-gray-100 my-3" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}