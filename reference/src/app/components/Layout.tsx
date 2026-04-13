import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { AIChatPanel } from "./AIChatPanel";
import { CommandPalette } from "./CommandPalette";

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      <AIChatPanel />
      <CommandPalette />
    </div>
  );
}