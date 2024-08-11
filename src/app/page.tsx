import Image from "next/image";
import NavBar from "./components/NavBar";
import WelcomeNote from "./components/home/WelcomeNote";
import InfoSection1 from "./components/home/InfoSection1";
import InfoSection2 from "./components/home/infoSection2";
import GetAppBTN from "./components/home/getAppBtn";

export default function Home() {
  return (
    <main className="relative flex min-h-screen max-w-screen flex-col items-center justify-between p-3 md:p-10 bg-black">
      <NavBar />
      <WelcomeNote />
      <InfoSection1 />
      <GetAppBTN />
      <InfoSection2 />
      <GetAppBTN />
    </main>
  );
}
