// src/types/index.ts
export type User = {
  name: string;
  avatarUrl: string;
};

export type PostStatus = 'draft' | 'scheduled' | 'published' | 'awaiting-approval';

export type Activity = {
  id: string;
  type: 'post-published' | 'post-scheduled' | 'post-new';
  postTitle: string;
  timestamp: string;
};