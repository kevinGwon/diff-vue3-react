const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/custom-hook-params",
    name: "Params",
    component: () => import("@/views/Params")
  },
  {
    path: "/custom-hook-inputs",
    name: "Inputs",
    component: () => import("@/views/Inputs")
  }
];

export default routes;
