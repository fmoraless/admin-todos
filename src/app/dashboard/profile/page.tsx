"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Session data:", session);
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <hr />

      <div className="flex flex-col">
        <p>Name: {session?.user?.name ?? "N/A"}</p>
        <p>Email: {session?.user?.email ?? "N/A"}</p>
        <p>Image: {session?.user?.image ?? "N/A"}</p>
      </div>
    </div>
  );
}
