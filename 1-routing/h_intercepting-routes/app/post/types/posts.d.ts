export interface Posts {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
