import React from "react";
import App from "./pages/app/App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const Providers = ( { mockData } ) => {
  return (
    <main>
      <GithubProvider mockData={mockData}>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
