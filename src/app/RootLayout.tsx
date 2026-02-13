
import { Outlet } from "@tanstack/react-router";

import Navbar from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function RootLayout() {
  return (
    <main className="relative bg-[#0F0F14] text-white overflow-hidden">
      <Navbar />

      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
}
