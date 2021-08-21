import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  FAQ_ROUTE,
  LOGIN_ROUTE,
  QUESTIONS_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Questions from "./pages/Questions/question";
import Faq from "./pages/Faq/Faq";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: FAQ_ROUTE,
    Component: Faq,
  },
  {
    path: QUESTIONS_ROUTE,
    Component: Questions,
  },
];
