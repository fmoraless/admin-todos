import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name || "Desconocido";
  const avatarUrl = session?.user?.image || "/default-avatar.png";

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="usuario conectado S-Side">
        {JSON.stringify(session.user)}
      </WidgetItem>
    </div>
  );
}
