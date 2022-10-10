import React from "react";
import RouterView from "./Router";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Setup = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterView />
      </Provider>
    </QueryClientProvider>
  );
};

export default Setup;
