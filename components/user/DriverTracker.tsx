'use client';

import { X, Navigation, Phone, MapPin, Clock, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Driver } from '@/lib/types';

interface DriverTrackerProps {
  isOpen: boolean;
  onClose: () => void;
  driver: Driver | null;
  pickupId: string;
}

export function DriverTracker({ isOpen, onClose, driver, pickupId }: DriverTrackerProps) {
  if (!isOpen || !driver) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end lg:items-center justify-center">
      <div className="bg-white w-full lg:w-[500px] lg:rounded-2xl rounded-t-2xl p-4 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#1976D2]" />
            Live Driver Tracking
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 h-64 rounded-xl mb-4 flex items-center justify-center relative">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center text-white text-2xl mb-2 animate-bounce">
              🚚
            </div>
            <p className="text-sm text-gray-600">Driver is on the way!</p>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2">
            <p className="text-xs font-medium">{driver.name}</p>
            <p className="text-xs text-gray-500">ETA: {driver.eta || '15 mins'}</p>
          </div>
        </div>

        {/* Driver Info */}
        <div className="bg-blue-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-medium">{driver.name}</p>
              <p className="text-sm text-gray-600">
                {driver.vehicleType} • {driver.licensePlate}
              </p>
            </div>
            <a href={`tel:${driver.phone}`} className="bg-white p-3 rounded-full">
              <Phone className="w-5 h-5 text-[#1976D2]" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2 text-center">
              <Clock className="w-4 h-4 mx-auto mb-1 text-[#1976D2]" />
              <p className="text-xs text-gray-500">ETA</p>
              <p className="font-bold text-sm">{driver.eta || '15'}</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center">
              <Star className="w-4 h-4 mx-auto mb-1 text-[#1976D2]" />
              <p className="text-xs text-gray-500">Rating</p>
              <p className="font-bold text-sm">{driver.rating}</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center">
              <Truck className="w-4 h-4 mx-auto mb-1 text-[#1976D2]" />
              <p className="text-xs text-gray-500">Pickups</p>
              <p className="font-bold text-sm">{driver.totalPickups}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            fullWidth 
            onClick={() => window.open(`https://maps.google.com/?q=${driver.name}`, '_blank')}
          >
            Open Maps
          </Button>
          <Button 
            variant="primary" 
            fullWidth
            onClick={onClose}
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}