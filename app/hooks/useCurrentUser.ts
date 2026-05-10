import { useState, useEffect } from 'react';

export interface CurrentUser {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  createdAt: string;
}

export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/auth/me`,
          {
            credentials: 'include',
          }
        );

        if (!response.ok) {
          setUser(null);
          setError(null);
          return;
        }

        const data = await response.json();
        setUser(data.data.user);
        setError(null);
      } catch (err) {
        console.error('Error fetching current user:', err);
        setError(err instanceof Error ? err.message : 'Failed to load user data');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return { user, loading, error };
}
