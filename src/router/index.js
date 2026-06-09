import Page from "@/components/Page.vue";
import TrangChu from "@/components/TrangChu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/books" },
  { path: "/books", component: TrangChu, name: "trangChu" },
  { path: "/page", component: Page, name: "page" },
  { path: "/books/add", component: TrangChu, name: "add" },
  { path: "/books/:id/edit", component: TrangChu, name: "edit" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
