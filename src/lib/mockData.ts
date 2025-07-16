// src/lib/mockData.ts
import { User, Activity } from "@/types";

export const mockUser: User = {
  name: "Alex Chen",
  // avatarUrl: "https://i.pravatar.cc/150?u=alexchen",
  avatarUrl: "https://i.pravatar.cc/150?img=32",
};

export const mockPostOverview = {
  drafts: 8,
  scheduled: 9,
  published: 4,
  awaitingApproval: 2,
};

export const mockRecentActivity: Activity[] = [
  {
    id: "1",
    type: "post-new",
    postTitle: "New product introduction post...",
    timestamp: "Jul 15, 12:30 PM",
  },
  {
    id: "2",
    type: "post-published",
    postTitle: "Meet our new team member, Marc...",
    timestamp: "Jul 15, 10:30 PM",
  },
  {
    id: "3",
    type: "post-published",
    postTitle: "Check out our latest blog post...",
    timestamp: "Jul 14, 05:00 PM",
  },
];

// ADDED: Data for the analytics dashboard
export const mockAnalyticsStats = {
  totalPosts: 6,
  totalEngagement: 74,
  avgLikes: 7,
};

export const mockTopPosts = [
  {
    id: "post1",
    title: "Exciting news about our new product launch...",
    engagements: 62,
  },
  {
    id: "post2",
    title: "Draft post for upcoming campaign. Please...",
    engagements: 3,
  },
  {
    id: "post3",
    title: "Meet our new team member, Marcus! He'...",
    engagements: 3,
  },
  {
    id: "post4",
    title: "New product introduction post. Please re...",
    engagements: 3,
  },
  {
    id: "post5",
    title: "Feature update announcement. Please revi...",
    engagements: 3,
  },
];

export const mockPostDetails = {
  text: "Exciting news about our new product launch! 🚀 #innovation #productlaunch",
  platforms: ["Facebook", "Twitter"],
  scheduledAt: "Sep 23, 10:00 AM",
  status: "Published",
  createdBy: "Alex Chen",
  imageUrl: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg",
  likes: 42,
  comments: 12,
  shares: 8,
  analytics: {
    impressions: "1,200",
    clicks: 85,
    engagementRate: "12.0%",
  },
};

// export const mockPostDetails = [
//   {
// id: "post1",
//     text: "Teamwork makes the dream work! 💼✨ Celebrating our latest collaboration milestone. #TeamGoals #Collaboration",
//     platforms: ["LinkedIn", "Instagram"],
//     scheduledAt: "Oct 2, 2:30 PM",
//     status: "Published",
//     createdBy: "Jordan Lee",
//     imageUrl:
//       "https://images.unsplash.com/photo-1573497019410-5c7c1f7b6f4b?q=80&w=2070&auto=format&fit=crop",
//     likes: 67,
//     comments: 18,
//     shares: 14,
//     analytics: {
//       impressions: "2,400",
//       clicks: 120,
//       engagementRate: "9.5%",
//     },
//   },
//   {
//     id: "post2",
//     text: "Get ready for our biggest campaign yet! 💥 We're crafting something bold, fresh, and community-driven. Stay tuned for exclusive previews and behind-the-scenes content. #ComingSoon #MarketingCampaign",
//     platforms: ["Instagram", "Facebook"],
//     scheduledAt: "Oct 20, 3:00 PM",
//     status: "Draft",
//     createdBy: "Samantha Brooks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
//     likes: 2,
//     comments: 0,
//     shares: 1,
//     analytics: {
//       impressions: "300",
//       clicks: 15,
//       engagementRate: "5.0%",
//     },
//   },

//   {
//     id: "post3",
//     text: "Say hello to Marcus, our new UX Designer! 👋 With a passion for intuitive design and a knack for creative problem-solving, Marcus is already making waves. Welcome aboard! #TeamIntro #UXDesign",
//     platforms: ["LinkedIn"],
//     scheduledAt: "Oct 21, 11:00 AM",
//     status: "Published",
//     createdBy: "Jordan Lee",
//     imageUrl:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop",
//     likes: 3,
//     comments: 0,
//     shares: 0,
//     analytics: {
//       impressions: "250",
//       clicks: 10,
//       engagementRate: "4.0%",
//     },
//   },

//   {
//     id: "post4",
//     text: "Introducing EcoTrack 🌱—our newest sustainability-focused product that helps you monitor and reduce your carbon footprint. Built for conscious consumers and forward-thinking businesses. #EcoTech #NewProduct",
//     platforms: ["Facebook", "Instagram"],
//     scheduledAt: "Oct 22, 1:00 PM",
//     status: "Scheduled",
//     createdBy: "Priya Nair",
//     imageUrl:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
//     likes: 3,
//     comments: 0,
//     shares: 0,
//     analytics: {
//       impressions: "280",
//       clicks: 12,
//       engagementRate: "4.3%",
//     },
//   },
//   {
//     id: "post5",
//     text: "We have just rolled out a major update to our dashboard! 🛠️ Enjoy faster load times, improved analytics, and a sleek new interface. Your feedback helped shape this—thank you! #FeatureUpdate #UserDriven",
//     platforms: ["Twitter", "LinkedIn"],
//     scheduledAt: "Oct 23, 9:30 AM",
//     status: "Scheduled",
//     createdBy: "Devon Carter",
//     imageUrl:
//       "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6795?q=80&w=2070&auto=format&fit=crop",
//     likes: 3,
//     comments: 0,
//     shares: 0,
//     analytics: {
//       impressions: "310",
//       clicks: 18,
//       engagementRate: "5.8%",
//     },
//   },
// ];
