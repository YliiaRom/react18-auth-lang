import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "../../../shared/api/DbOperations";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { secondaryAuth } from "@/shared/config/firebase-secondary-auth";

const db = new DbOperations("users");

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      async queryFn() {
        try {
          const users = await db.getAll();
          return { data: users };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      providesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      async queryFn({ uid, role }) {
        try {
          await db.update(uid, { role });
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["User"],
    }),
    addUser: builder.mutation({
      async queryFn(user) {
        try {
          //--doc
          // const auth = getAuth();
          const result = await createUserWithEmailAndPassword(
            secondaryAuth,
            user?.email,
            user?.password
          );
          //--+ db
          const userDB = new DbOperations("users");
          await userDB.setWithId(result.user.uid, {
            uid: result.user.uid,
            email: result.user.email,
            displayName: user.displayName || "",
            photoUrl: result.user.photoUrl || "",
            role: user.role || "user",
            createdAt: new Date().toISOString(),
          });

          // await db.add(user);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      async queryFn(uid) {
        try {
          await db.delete(uid);
          return { data: true };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
  useAddUserMutation,
} = userApi;
