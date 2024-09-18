import { FaCopyright, FaWhatsapp } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full p-5 py-10 pt-20">
      <div className="flex gap-2 items-center">
        <FaCopyright className="text-green-600" />
        <h3 className="text-green-500 font-bold text-md md:text-3xl">
          ExtraCash
        </h3>
        <h3 className="text-white text-xs">{`2022 - ${new Date().getFullYear()}`}</h3>
      </div>
      <div className="flex flex-row items-center gap-5 text-xs">
        <div className="flex items-start justify-center gap-1">
          <FcPhone className="text-green-600" />
          <h3 className="text-green-600">08067288692</h3>
        </div>
        <div className="flex items-start justify-center gap-1">
          <FaWhatsapp className="text-green-600" />
          <h3 className="text-green-600">09021347323</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
