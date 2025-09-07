import AboutSite from "@/pages/AboutSite";
import { roles } from "../roles";
import ProductLangAddPage from "@/pages/ProductLangAddPage";

export const frontRoutes = {
  pages: {
    // НазваСторінки: {
    //   path: 'шлях_у_роутері',
    //   navigationPath: 'шлях_для_програмної_навігації',
    //   meta: {
    //     title: 'заголовок_сторінки',
    //     isInMenu: чи треба у головному мені відповідний пункт,
    //     requireAuth: чи потребує авторизації,
    //     roles: [перелік ролей користувачів, які мають доступ],
    //   },
    // },
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "home",
        isInMenu: true,
        requireAuth: false,
      },
    },
    LoginPage: {
      path: "login",
      navigationPath: "/login",
      meta: {
        title: "Login page",
        isInMenu: false,
        requireAuth: false,
      },
    },
    UsersPage: {
      path: "users",
      navigationPath: "/users",
      meta: {
        title: "Users page",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    UserEditPage: {
      path: "users/edit/:id?",
      navigationPath: (id) => `/users/edit/${id ?? ""}`,
      meta: {
        title: "Редагування/Створення користувача",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    ProductsPage: {
      path: "products",
      navigationPath: "/products",
      meta: {
        title: "productsPage",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ProductEditPage: {
      path: "products/edit/:id?",
      navigationPath: (id) => `/products/edit/${id ?? ""}`,
      meta: {
        title: "Редагування товару",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ProductAddPage: {
      path: "products/add",
      navigationPath: "/products/add",
      meta: {
        title: "productAddPage",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ProductLangAddPage: {
      path: "products-lang/add",
      navigationPath: "/products-lang/add",
      meta: {
        title: "productLangAddPage",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    CartPage: {
      path: "cart",
      navigationPath: "/cart",
      meta: {
        title: "Кошик",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    AboutSite: {
      path: "about-site",
      navigationPath: "/about-site",
      meta: {
        title: "about",
        isInMenu: true,
        requireAuth: false,
      },
    },
    NotFoundPage: {
      path: "*",
      meta: {
        title: "Not Found",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "Forbidden",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages);
  return pagesList.map((page) => frontRoutes.pages[page]);
}
