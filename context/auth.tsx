// /context/auth.tsx
import type { Session } from "@supabase/supabase-js";
import { onAuthStateChange } from "../lib/supabase";
import { proxy, useSnapshot } from "valtio";
import { useEffect } from "react";

export interface AuthStore {
  user: null | Session["user"];
  session: null | Session;
  loaded: boolean;
}

export const authStore = proxy<AuthStore>({
  user: null,
  session: null,
  loaded: false,
});

export const useInitAuth = () => {
  useEffect(() => {
    const { data: subscription } = onAuthStateChange((event, session) => {
      authStore.user = session?.user ?? null;
      authStore.session = session ?? null;
      authStore.loaded = true;
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);
};

// State hooks
export const useSession = () => useSnapshot(authStore).session;
export const useUser = () => useSnapshot(authStore).user;
export const useAuthLoaded = () => useSnapshot(authStore).loaded;
