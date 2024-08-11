import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import GetAppBTN from "./getAppBtn";

const WelcomeNote = () => {
  return (
    <div className="flex md:flex-row flex-col items-center md:items-end justify-center gap-5 w-full max-w-screen md:p-10 p-3 pt-[100px] md:pt-10">
      <div className="flex flex-col gap-5 text-white max-w-[600px]">
        <span className="flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-4xl">Welcome to</h1>
          <h1 className="text-4xl">extraMoneys</h1>
        </span>
        <span className="flex flex-col gap-1 items-center md:items-start">
          <h3 className="text-sm">Manage your wealth.</h3>
          <h3 className="text-sm">
            {"Earn 13% per week on your spare change"}
          </h3>
        </span>
        <GetAppBTN />
      </div>
      <Image
        src={"/images/mobile_1.png"}
        alt="welcome.png"
        width={600}
        height={600}
        className="w-[400px] h-[400px]"
      />
    </div>
  );
};

export default WelcomeNote;
