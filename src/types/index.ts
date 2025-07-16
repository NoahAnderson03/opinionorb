export interface RedditPost {
  id: string;
  title: string;
  subreddit: string;
  category: string;
  upvotes: number;
  comments: string[];
  createdAt: string;
}

export interface Idea extends RedditPost {
  summary: string;
  complaints: string;
  featureRequests: string;
}
