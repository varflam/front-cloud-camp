import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp'
}),
  endpoints: builder => ({
    sendForm: builder.mutation({
      query: data => ({
        url: '/frontend',
        params: {...data},
        method: 'POST',
      })
    })
  })
});

export const { useSendFormMutation } = formApiSlice;