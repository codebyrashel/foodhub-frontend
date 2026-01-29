"use client";

import { useEffect, useState } from "react";
import { apiClient } from "@/lib/apiClient";
import type { ApiUser } from "@/types/api";

interface UseCurrentUserState {
  user: ApiUser | null;
  loading: boolean;
  error: string | null;
}

export function useCurrentUser(): UseCurrentUserState {
  const [state, setState] = useState<UseCurrentUserState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      try {
        const data = await apiClient.get<ApiUser>("/api/auth/me");
        if (!cancelled) {
          setState({ user: data, loading: false, error: null });
        }
      } catch (err: unknown) {
        if (!cancelled) {
          // 401 is normal when not logged in
          const errorMessage = err instanceof Error ? err.message : null;
          setState({
            user: null,
            loading: false,
            error: errorMessage,
          });
        }
      }
    }

    loadUser();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}