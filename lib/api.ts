export interface Post {
  id: number;
  title: string;
  content: string;
}

// Simulate async API call
export async function fetchPosts(): Promise<Post[]> {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  // mock response
  return [
    {
      id: 1,
      title: 'Hello Next.js',
      content: 'Welcome to your first Next.js blog post!',
    },
    {
      id: 2,
      title: 'TypeScript with Next.js',
      content:
        'Type your API data correctly to avoid bugs and increase maintainability.',
    },
    {
      id: 3,
      title: 'Async Data Fetching',
      content:
        'Learn to fetch API data asynchronously for high-performance React apps.',
    },
  ];
}
