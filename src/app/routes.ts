import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import RootLayout from "./RootLayout";
import Home from "@/pages/home";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
  ]),
});
