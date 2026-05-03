import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId, sessionClaims } = await auth();
  if (!userId) redirect("/sign-in");
  if (sessionClaims?.metadata?.role !== "admin") redirect("/dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isAdmin={true} />
      <main className="main-content">{children}</main>
    </div>
  );
}
