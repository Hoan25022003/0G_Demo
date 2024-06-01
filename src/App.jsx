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
        <div className="relative min-h-screen pb-[120px] overflow-hidden xl:pb-0">
          <img
            className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-50"
            src="/img_background.png"
          ></img>

          <div className="relative z-10">
            <Header />
            <MainLayout />
          </div>
        </div>
        <Footer/>
        <ToastContainer />
        
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
