'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Truck, 
  Phone, 
  Navigation, 
  ChevronRight,
  Calendar,
  Package,
  Award
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import type { PickupRequest } from '@/lib/types';

interface PickupCardProps {
  pickup: PickupRequest;
  showDriver?: boolean;
  onTrack?: () => void;
}

export function PickupCard({ pickup, showDriver = true, onTrack }: PickupCardProps) {
  const [eta, setEta] = useState<string>(pickup.driver?.eta || 'Calculating...');

  useEffect(() => {
    if (!pickup.driver || pickup.status !== 'assigned') return;

    const interval = setInterval(() => {
      const minutes = Math.floor(Math.random() * 20) + 5;
      setEta(`${minutes} mins`);
    }, 10000);

    return () => clearInterval(interval);
  }, [pickup.driver, pickup.status]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'assigned': return 'bg-blue-100 text-blue-700';
      case 'en_route': return 'bg-yellow-100 text-yellow-700';
      case 'arrived': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'assigned': return '🚚';
      case 'en_route': return '🚗';
      case 'arrived': return '📍';
      case 'completed': return '✅';
      case 'cancelled': return '❌';
      default: return '⏳';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTimeWindowLabel = (window: string) => {
    switch(window) {
      case 'morning': return '8am - 11am';
      case 'afternoon': return '2pm - 5pm';
      case 'evening': return '5pm - 8pm';
      default: return window;
    }
  };

  const totalEstimatedWeight = pickup.wasteTypes.reduce((sum, item) => sum + (item.estimatedWeight || 0), 0);

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-0">
        {/* Status Bar */}
        <div className={`px-4 py-2 flex items-center justify-between ${getStatusColor(pickup.status)}`}>
          <div className="flex items-center gap-2">
            <span>{getStatusIcon(pickup.status)}</span>
            <span className="font-medium capitalize">{pickup.status.replace('_', ' ')}</span>
          </div>
          {pickup.status === 'assigned' && pickup.driverId && (
            <Badge variant="warning" className="animate-pulse">
              Driver assigned
            </Badge>
          )}
        </div>

        {/* Main Content */}
        <div className="p-4">
          {/* Date and Time */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(pickup.scheduledDate)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {getTimeWindowLabel(pickup.timeWindow)}
            </div>
          </div>

          {/* Address */}
          <div className="mb-4 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600">{pickup.address}</p>
          </div>

          {/* Waste Types */}
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
              <Package className="w-4 h-4" />
              Items ({totalEstimatedWeight} kg total):
            </p>
            <div className="flex flex-wrap gap-2">
              {pickup.wasteTypes.map((item, i) => (
                <Badge key={i} variant="default" className="bg-gray-100 text-gray-700">
                  {item.wasteTypeId} {item.estimatedWeight && `(${item.estimatedWeight}kg)`}
                </Badge>
              ))}
            </div>
          </div>

          {/* Driver Information */}
          {showDriver && pickup.driver && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#1976D2]" />
                Driver Details
              </h4>
              
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#1976D2] rounded-full flex items-center justify-center text-white font-bold">
                    {pickup.driver.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{pickup.driver.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-3 h-3" />
                      <button
                        onClick={() => handlePhoneClick(pickup.driver!.phone)}
                        className="hover:text-[#1976D2] focus:outline-none"
                      >
                        {pickup.driver.phone}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimated arrival:</span>
                    <span className="font-bold text-[#1976D2]">{eta}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 rounded-full h-2 transition-all duration-500"
                      style={{ width: pickup.status === 'en_route' ? '75%' : '40%' }}
                    />
                  </div>

                  <div className="flex gap-2 mt-3">
                    {onTrack && (
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="flex-1 gap-2"
                        onClick={onTrack}
                      >
                        <Navigation className="w-4 h-4" />
                        Track Live
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(pickup.address)}`, '_blank')}
                    >
                      <MapPin className="w-4 h-4" />
                      View Route
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Points Info */}
          {pickup.status === 'completed' && pickup.pointsEarned && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-500" />
                  Points earned:
                </span>
                <span className="font-bold text-green-600">+{pickup.pointsEarned} pts</span>
              </div>
            </div>
          )}

          {/* View Details Link */}
          <div className="mt-4 text-right">
            <Link 
              href={`/user/pickups/${pickup.id}`}
              className="text-sm text-[#1976D2] hover:underline inline-flex items-center gap-1"
            >
              View Details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}