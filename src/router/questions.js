const routes = [
  { path: "/questions", component: () => import("@/views/questions/List") },
  { path: "/questions/new", component: () => import("@/views/questions/Add") },
  {
    path: "/questions/:id/edit",
    component: () => import("@/views/questions/Edit")
  }
];

export default routes;
