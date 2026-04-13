import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/EnhancedDashboard";
import { Portfolio } from "./pages/Portfolio";
import { Analytics } from "./pages/Analytics";
import { Alerts } from "./pages/Alerts";
import { News } from "./pages/News";
import { Settings } from "./pages/Settings";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  { path: "/login", Component: Login },
  { path: "/signup", Component: Signup },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "portfolio", Component: Portfolio },
      { path: "analytics", Component: Analytics },
      { path: "alerts", Component: Alerts },
      { path: "news", Component: News },
      { path: "settings", Component: Settings },
    ],
  },
]);