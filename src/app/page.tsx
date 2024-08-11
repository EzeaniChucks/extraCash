import Image from "next/image";
import NavBar from "./components/NavBar";
import WelcomeNote from "./components/home/WelcomeNote";
import InfoSection1 from "./components/home/InfoSection1";
import InfoSection2 from "./components/home/infoSection2";
import GetAppBTN from "./components/home/getAppBtn";
import InfoSection3 from "./components/home/infoSection3";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen max-w-screen p-3 md:p-10">
      <WelcomeNote />
      <InfoSection1 />
      <GetAppBTN />
      <InfoSection2 />
      <GetAppBTN />
      <InfoSection3 />
      <GetAppBTN />
    </main>
  );
}
