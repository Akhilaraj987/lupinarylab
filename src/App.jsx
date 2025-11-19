import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import AffiliateMarketing from "./components/images/AffiliateMarketing";
import BlockchainDevelopment from "./components/images/BlockchainDevelopment";
import AiAutomation from "./components/images/AiAutomation";
import CustomSW from "./components/images/CustomSW";
import DataAnalystics from "./components/images/DA";
import ITConsulting from "./components/images/ITConsulting";
import WhoWeAre from "./components/WhoWeAre";
import HeroCard from "./components/HeroCard";
import Growth from "./components/Growth";
import Support from "./components/Support";
import CustomerService from "./components/CustomerService";
import Footer from "./components/Footer";
import Expertice from "./components/Expertice";
function App() {
  const services = [
    {
      id: "affiliate-marketing",
      name: "Affiliate Marketing Software",
      description:
        "Helps businesses track referrals, manage partners, and automate commissions to increase revenue efficiently.",
      link: "#",
      logo: <AffiliateMarketing />,
    },
    {
      id: "blockchain-development",
      name: "Blockchain Development",
      description:
        "Builds secure, decentralized digital systems that enhance transparency, data integrity, and trust across networks.",
      link: "#",
      logo: <BlockchainDevelopment />,
    },
    {
      id: "ai-automation-agents",
      name: "AI Automation & Agents ",
      description:
        "Automates workflows using intelligent systems that streamline operations, improve efficiency, & reduce manual effort.",
      link: "#",
      logo: <AiAutomation />,
    },
    {
      id: "custom-software",
      name: "Custom Software",
      description:
        "Digital solutions designed to meet unique business needs and streamline operations.",
      link: "#",
      logo: <CustomSW />,
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      description:
        "Advanced analytics tools to help businesses make data-driven decisions.",
      link: "#",
      logo: <DataAnalystics />,
    },
    {
      id: "it-consulting",
      name: "IT Consulting",
      description:
        "Expert guidance and strategic support for sustainable growth.",
      link: "#",
      logo: <ITConsulting />,
    },
  ];
  return (
    <div className="">
      <div className="h-screen relative z-10 pl-[122px] pr-[124px] pt-7 bg-[#17005B]">
        <Header />
        <HeroCard />
      </div>
      <div className="relative z-20 overflow-hidden ">
        <div className="primary-blur-div z-20 top-[-200px] left-[-100px]  absolute h-[384px] w-[200%]" />
        <div className="relative z-20  pl-[122px] pr-[124px]">
          {/* Services Section */}
          <div className="w-full flex justify-center ">
            <div className="grid grid-cols-3 gap-[15px]">
            {services.map((service) => (
              <Card service={service} />
            ))}
          </div>
          </div>

          {/* who we are */}
          <WhoWeAre />

          {/* growth */}
          <Growth />
          {/* support */}

          <Support />
        </div>
        <div className="bg-[#7D30FF] pl-[122px] relative h-[1000px] pr-[124px]">
          <div className="secondary-blur-div z-20 top-[-200px] left-[-100px]  absolute h-[284px] w-[200%]" />

          {/* our expertice */}
          <Expertice />
          <div className="primary-blur-div z-20 rotate-5 bottom-[-200px] left-[-100px]  absolute h-[284px] w-[200%]" />

          {/* customer service */}
        </div>

        <div className="pl-[122px] pr-[124px]">
          <CustomerService />
        </div>
        {/* footer */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
