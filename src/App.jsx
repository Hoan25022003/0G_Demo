import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { dappConfig } from "./common/config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={dappConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="relative min-h-screen pb-14  overflow-hidden xl:pb-0">
          <img
            className="absolute top-0 left-0 z-0 w-screen h-full object-background translate-y-[30px] sm:-translate-y-[15px]"
            src="/Background.svg"
          ></img>

          <div className="relative z-10">
            <Header />
            <MainLayout />
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
