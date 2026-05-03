import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function MemberLayout({ children }: { children: React.ReactNode }) {
  const { userId, sessionClaims } = await auth();
  if (!userId) redirect("/sign-in");

  const isAdmin = sessionClaims?.metadata?.role === "admin";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isAdmin={isAdmin} />
      <main className="main-content">{children}</main>
    </div>
  );
}
