import { createBrowserRouter } from "react-router-dom";

import { DashboardLayout } from "@/layouts/dashboard-layout";
import { AnalysisPage } from "@/pages/analysis";
import { HomePage } from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "analysis",
        element: <AnalysisPage />,
      },
    ],
  },
]);
