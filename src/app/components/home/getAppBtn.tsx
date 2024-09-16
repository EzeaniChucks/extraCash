import { FaGooglePlay } from "react-icons/fa";

const GetAppBTN = () => {
  return (
    <div className="flex mt-10 justify-center md:justify-start text-white">
      <a
        // href="https://drive.google.com/file/d/1eqDBE0dyht8m3fUJDHATGW1zFrBrboxw/view?usp=sharing"
        href="https://drive.google.com/file/d/1tGexL8LUOVud_g38ccKC-tMMDwFcDS2l/view?usp=sharing"
        download
        target="_blank"
      >
        <div className="flex items-center gap-3 cursor-pointer bg-green-700/50 rounded-xl p-1 px-8">
          <FaGooglePlay className="text-2xl" />
          <span className="flex flex-col">
            <h6 className="text-xs">get app now</h6>
            <h4>For Android</h4>
          </span>
        </div>
      </a>
    </div>
  );
};

export default GetAppBTN;
