import { createRouter, createWebHistory } from "vue-router";

import FrontendLayout from "@/layouts/Frontend.vue";
import Home from "../views/frontend/Home.vue";
import About from "@/views/frontend/About.vue";
import Contact from "@/views/frontend/Contact.vue";
import ForgotPassword from "@/views/frontend/ForgotPassword.vue";
import Login from "@/views/frontend/Login.vue";
import Service from "@/views/frontend/Service.vue";
import Register from "@/views/frontend/Register.vue";
import Portfolio from "@/views/frontend/Portfolio.vue";
import NotFound from "@/views/frontend/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Home,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "หน้าหลัก",
      description: "หน้าหลักระบบคลังสินค้า",
    },
  },
  {
    path: "/about",
    name: "About",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: About,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "เกี่ยวกับเรา",
      description: "หน้าเกี่ยวกับเรา",
    },
  },
  {
    path: "/service",
    name: "Service",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Service,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "บริการ",
      description: "หน้าบริการ",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Contact,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "ติดต่อเรา",
      description: "หน้าติดต่อเรา",
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Portfolio,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "หน้าผลงานของเรา",
      description: "หน้าผลงานของเรา",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Register,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "ลงทะเบียน",
      description: "หน้าลงทะเบียน",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: Login,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "เข้าสู่ระบบ",
      description: "หน้าเข้าสู่ระบบ",
    },
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: FrontendLayout,
    children: [
      {
        path: "",
        component: ForgotPassword,
      },
    ],
    //ใส่หน้า title
    meta: {
      title: "ลืมรหัสผ่าน",
      description: "หน้าลืมรหัสผ่าน",
    },
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
