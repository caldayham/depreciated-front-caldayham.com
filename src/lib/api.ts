const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

async function fetcher<T = any>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

export async function getPosts() {
  const url = `${API_BASE_URL}/posts`;
  return await fetcher<Array<{ id: number; title: string; body: string }>>(url);
}

export async function getPost(id: number) {
  const url = `${API_BASE_URL}/posts/${id}`;
  return await fetcher<{ id: number; title: string; body: string }>(url);
}

// Add more API functions as needed
