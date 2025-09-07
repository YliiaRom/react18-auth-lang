import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/features/auth/api/authApi";
import authReducer from "@/features/auth/api/authSlice";
import { userApi } from "@/entities/user/api/userApi";
import { productApi } from "@/entities/product/api/productApi";
import { cartItemApi } from "@/entities/cartItem/api/cartItemApi";
import { productLangApi } from "@/entities/productLang/api/productLangApi";
import burgerMenuSliceReducer from "@/shared/slices/burgerMenuSlice.js";
export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuSliceReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [productLangApi.reducerPath]: productLangApi.reducer,
    [cartItemApi.reducerPath]: cartItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      productApi.middleware,
      productLangApi.middleware,
      cartItemApi.middleware
    ),
});
