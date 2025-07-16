// src/lib/mockData.ts
import { User, Activity } from '@/types';

export const mockUser: User = {
  name: 'Alex Chen',
  avatarUrl: 'https://i.pravatar.cc/150?u=alexchen', // Using a placeholder image service
};

export const mockPostOverview = {
  drafts: 8,
  scheduled: 9,
  published: 4,
  awaitingApproval: 2,
};

export const mockRecentActivity: Activity[] = [
  { id: '1', type: 'post-new', postTitle: 'New product introduction post...', timestamp: 'Jul 15, 12:30 PM' },
  { id: '2', type: 'post-published', postTitle: 'Meet our new team member, Marc...', timestamp: 'Jul 15, 10:30 PM' },
  { id: '3', type: 'post-published', postTitle: 'Check out our latest blog post...', timestamp: 'Jul 14, 05:00 PM' },
];

// ADDED: Data for the analytics dashboard
export const mockAnalyticsStats = {
  totalPosts: 6,
  totalEngagement: 74,
  avgLikes: 7,
};

export const mockTopPosts = [
  { id: 'post1', title: 'Exciting news about our new product launch...', engagements: 62 },
  { id: 'post2', title: 'Draft post for upcoming campaign. Please...', engagements: 3 },
  { id: 'post3', title: 'Meet our new team member, Marcus! He\'...', engagements: 3 },
  { id: 'post4', title: 'New product introduction post. Please re...', engagements: 3 },
  { id: 'post5', title: 'Feature update announcement. Please revi...', engagements: 3 },
];

export const mockPostDetails = {
  text: 'Exciting news about our new product launch! 🚀 #innovation #productlaunch',
  platforms: ['Facebook', 'Twitter'],
  scheduledAt: 'Sep 23, 10:00 AM',
  status: 'Published',
  createdBy: 'Alex Chen',
  imageUrl: 'https://images.unsplash.com/photo-1579492450119-835634239574?q=80&w=2070&auto=format&fit=crop', // A relevant placeholder image
  likes: 42,
  comments: 12,
  shares: 8,
  analytics: {
    impressions: '1,200',
    clicks: 85,
    engagementRate: '12.0%',
  },
};