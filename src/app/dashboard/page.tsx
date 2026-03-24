import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 grid-cols-1">
      <WidgetItem title="usuario conectado S-Side">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{session.user?.name}</span>
          <span className="text-sm text-gray-500">{session.user?.image}</span>
          <span className="text-sm text-gray-500">{session.user?.email}</span>

          <div>{JSON.stringify(session, null, 2)}</div>
        </div>
      </WidgetItem>
    </div>
  );
}
