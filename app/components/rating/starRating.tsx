import React from "react";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  colors?: string[];
}

export default function StarRating({ rating, colors }: StarRatingProps) {

  const colorClasses = colors ?? [
    'text-green-300',
    'text-green-400',
    'text-green-500',
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-green-900',
    'text-green-900',
    'text-green-900',
    'text-green-900',
  ];

  const halfStar = (
    <div className="relative w-6 h-6">
      <Star className="absolute inset-0 text-gray-300" fill="currentColor" />
      {rating % 1 >= 0.5 && (
        <StarHalf
          className={`absolute inset-0 ${colorClasses[Math.ceil(rating)]}`}
          fill="currentColor"
        />
      )}
    </div>
  );

  const fullStars = Array.from({ length: Math.floor(rating) }, (_, i) => (
    <Star key={i} className={`w-6 h-6 ${colorClasses[Math.floor(i)]}`} fill="currentColor" />
  ));
  const emptyStars = Array.from({ length: 9 - Math.floor(rating) }, (_, i) => (
    <Star key={i} className="w-6 h-6 text-gray-300" fill="currentColor" />
  ));

  return (
    <div className="flex">
      {fullStars}
      {halfStar}
      {emptyStars}
    </div>
  );
}
