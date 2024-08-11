import { FaGooglePlay } from "react-icons/fa";

const GetAppBTN = () => {
  return (
    <div className="flex mt-10 justify-center md:justify-start w-full text-white">
      <div className="flex items-center gap-3 cursor-pointer bg-green-700/50 rounded-xl p-1 px-8">
        <FaGooglePlay className="text-2xl" />
        <span className="flex flex-col">
          <h6 className="text-xs">get app now</h6>
          <h4>For Android</h4>
        </span>
      </div>
    </div>
  );
};

export default GetAppBTN;
