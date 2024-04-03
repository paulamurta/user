import "../../assets/styles/global";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/themes/theme";
import { Routes } from "../../routes";
import { GlobalStyles } from "../../assets/styles/global";
import { ToastContainer } from "../ToastContainer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ToastContainer />
          <>
            <Routes />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
