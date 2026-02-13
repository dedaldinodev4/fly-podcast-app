
import { Outlet } from "@tanstack/react-router";

import Navbar from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
