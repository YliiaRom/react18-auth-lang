import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "../../../shared/api/DbOperations";
import { auth } from "@/shared/config/firebase-config";

const db = new DbOperations("productsLang");

export const productLangApi = createApi({
  reducerPath: "productLangApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["ProductLang"],
  endpoints: (builder) => ({
    getAllProductsLang: builder.query({
      async queryFn() {
        try {
          const products = await db.getAll();

          return { data: products };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      providesTags: ["ProductLang"],
    }),
    getProductLangById: builder.query({
      async queryFn(id) {
        try {
          const product = await db.getById(id);
          return { data: product };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      providesTags: ["ProductLang"],
    }),
    addProductLang: builder.mutation({
      async queryFn(product) {
        try {
          const user = auth.currentUser;
          if (!user) throw new Error("Not authenticated");

          const newProduct = await db.add({
            ...product,
            ownerId: user.uid,
          });

          return { data: newProduct || true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["ProductLang"],
    }),
    updateProductLang: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["ProductLang"],
    }),
    deleteProductLang: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["ProductLang"],
    }),
  }),
});

export const {
  useGetAllProductsLangQuery,
  useGetProductLangByIdQuery,
  useAddProductLangMutation,
  useUpdateProductLangMutation,
  useDeleteProductLangMutation,
} = productLangApi;
