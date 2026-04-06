export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  time: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  image?: string;
  likes: number;
  likedByMe: boolean;
  comments: Comment[];
  time: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow';
  fromUser: string;
  message: string;
  time: string;
  read: boolean;
}
