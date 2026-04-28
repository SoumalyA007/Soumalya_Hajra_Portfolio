import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// Apply saved theme before first render (prevent flash)
const savedTheme = localStorage.getItem("portfolio-theme") ?? "dark";
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  document.documentElement.style.colorScheme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  document.documentElement.style.colorScheme = "light";
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <InternetIdentityProvider>
      <App />
    </InternetIdentityProvider>
  </QueryClientProvider>,
);
