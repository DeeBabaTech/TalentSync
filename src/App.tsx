import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import Body from "@/components/body";
import Advantage from "@/components/advantage";
import Shopify from "@/components/shopify";
import Questions from "./components/Questions";
import Subscription from "./components/subscription";
import Footer from "./components/footer";

const App = () => {
  const [isTopofPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar isTopOfPage={isTopofPage} />
      <Body />
      <Advantage />
      <Shopify />
      <Questions />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;
