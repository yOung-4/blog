const routes = [
  {
    path: "/",
    component: () => import("layouts/MainPage.vue"),
    redirect: { name: "index" },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("pages/Main/IndexPage.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("pages/Main/AboutPage.vue"),
      },
      {
        path: "directory",
        name: "directory",
        component: () => import("pages/Blog/DirectoryPage.vue"),
      },
      {
        path: "friends",
        name: "friends",
        component: () => import("pages/Main/FriendsPage.vue"),
      },
      {
        path: "blog/:id",
        name: "blog",
        component: () => import("pages/Blog/BlogContentPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("layouts/ErrorNotFound.vue"),
  },
];

export default routes;
