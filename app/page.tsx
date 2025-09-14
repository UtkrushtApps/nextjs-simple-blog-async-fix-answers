import React, { useEffect } from 'react';
import { fetchPosts, Post } from '../lib/api';
import { logPageView } from '../lib/analytics';

// SSR: use async Server Component pattern
export default async function HomePage() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (e: any) {
    error = e?.message || 'Failed to load posts.';
  }

  // Analytics logging in background, must not block rendering.
  useEffect(() => {
    // log analytics event, but don't block render
    logPageView()
      .catch((e) => {
        // Optionally log error, but ignore for UI
      });
  }, []);

  return (
    <main style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>My Next.js Simple Blog</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{ border: '1px solid #ccc', margin: '1rem 0', borderRadius: 5, padding: 16 }}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
