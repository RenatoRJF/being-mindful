'use client';

import { useState, useEffect } from 'react';

type ContentType = 'podcast' | 'blog';

interface UseLikesReturn {
  isLiked: boolean;
  likeCount: number;
  toggleLike: () => void;
}

export function useLikes(contentId: string, type: ContentType): UseLikesReturn {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Generate storage keys
  const likeStatusKey = `${type}_like_${contentId}`;
  const likeCountKey = `${type}_count_${contentId}`;

  // Generate a random number between min and max (inclusive)
  const getRandomLikeCount = () => {
    const min = 845;
    const max = 2788;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Check if content should have initial likes
  const shouldHaveInitialLikes = () => {
    // All blog posts and podcasts should have initial likes
    return type === 'blog' || type === 'podcast';
  };

  // Load initial state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if user has liked this content
      const likedStatus = localStorage.getItem(likeStatusKey) === 'true';
      setIsLiked(likedStatus);

      // Get like count or generate initial count
      const savedCount = localStorage.getItem(likeCountKey);
      if (savedCount) {
        setLikeCount(parseInt(savedCount, 10));
      } else {
        // Set random initial count for all blog posts and podcasts
        const initialCount = shouldHaveInitialLikes() ? getRandomLikeCount() : 0;
        setLikeCount(initialCount);
        localStorage.setItem(likeCountKey, initialCount.toString());
      }
    }
  }, [likeStatusKey, likeCountKey]);

  const toggleLike = () => {
    if (typeof window === 'undefined') return;

    const newIsLiked = !isLiked;
    const newCount = likeCount + (newIsLiked ? 1 : -1);

    // Update state
    setIsLiked(newIsLiked);
    setLikeCount(newCount);

    // Save to localStorage
    localStorage.setItem(likeStatusKey, newIsLiked.toString());
    localStorage.setItem(likeCountKey, newCount.toString());
  };

  return {
    isLiked,
    likeCount,
    toggleLike
  };
} 