import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { Landing } from "./pages/Landing";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Solutions } from "./pages/Solutions";
import { SolutionDetail } from "./pages/SolutionDetail";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioDetail } from "./pages/PortfolioDetail";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { ProjectTracking } from "./pages/ProjectTracking";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminLeads } from "./pages/admin/Leads";
import { AdminBlog } from "./pages/admin/Blog";
import { AdminTestimonials } from "./pages/admin/Testimonials";
import { AdminPortfolio } from "./pages/admin/Portfolio";
import { AdminSolutions } from "./pages/admin/Solutions";
import { AdminProjects } from "./pages/admin/Projects";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Landing },
      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "solutions", Component: Solutions },
      { path: "solutions/:slug", Component: SolutionDetail },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:slug", Component: PortfolioDetail },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "project-tracking/:projectId", Component: ProjectTracking },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "leads", Component: AdminLeads },
      { path: "blog", Component: AdminBlog },
      { path: "testimonials", Component: AdminTestimonials },
      { path: "portfolio", Component: AdminPortfolio },
      { path: "solutions", Component: AdminSolutions },
      { path: "projects", Component: AdminProjects },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
