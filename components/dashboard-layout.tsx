import { useAuthLoaded, useUser } from "context/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const DashboardLayout = ({ children }: React.PropsWithChildren<Props>) => {
  const loaded = useAuthLoaded();
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user && loaded) {
      router.push("/login");
    }
  }, [loaded, user, router]);

  if (!user) return null;

  return <div className="container">{children}</div>;
};

export default DashboardLayout;

export const getDashboardLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
