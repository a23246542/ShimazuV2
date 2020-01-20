import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";

import Dashboard from "../views/Dashboard.vue";
import DashProducts from "../views/DashProducts.vue";
import Coupon from "../views/Coupon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/signin",
    name: "Login",
    component: Login
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/products/:productId",
    name: "SingleProduct",
    component: SingleProduct
  },
  {
    path: "/cart",
    component: Cart,
    children: [
      {
        path: "",
        name: "Cart",
        component: Cart
      }
    ]
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "products",
        name: "DashProducts",
        component: DashProducts,
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        name: "Coupon",
        component: Coupon,
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
