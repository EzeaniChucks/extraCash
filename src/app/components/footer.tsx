import { FaCopyright, FaWhatsapp } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full p-5 py-10 pt-20">
      <div className="flex gap-2 items-center">
        <FaCopyright className="text-green-600" />
        <h3 className="text-green-500 font-bold text-md md:text-3xl">
          ExtraMonies
        </h3>
        <h3 className="text-white">{new Date().getFullYear()}</h3>
      </div>
      <div className="flex flex-row items-center gap-5 text-xs">
        <div className="flex items-center justify-center gap-2">
          <FcPhone className="text-green-600" />
          <h3 className="text-green-600">9069687585</h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaWhatsapp className="text-green-600" />
          <h3 className="text-green-600">9069687875</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
