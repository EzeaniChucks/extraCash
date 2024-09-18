const InfoSection2 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[700px] max-w-screen md:p-10 p-3 mt-[100px]">
      <div className="flex flex-col items-center justify-center text-gray-100 gap-5">
        <h3 className="text-4xl text-center">How safe is your money?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-200 gap-5 text-sm md:text-md w-full bg-white/10 p-5 rounded-xl">
        <h3 className="text-center">
          {"Your money is completely safe and withdrawable per week"}
        </h3>
        <h3 className="text-center">
          {`ExtraCash pools funds from investors and put them into low yield, low
          risk short-term financial instruments. Our aim is to build and gather funds, support
          local businesses and individuals by giving out loans, take advantage of the opportunities like government bonds and return the
          ROI to our clients`}
        </h3>
        <h4 className="text-center">{"Join the smart money makers!"}</h4>
        <h4 className="text-center">
          {"Make your cash work for you. Get the app below right now."}{" "}
        </h4>
      </div>
    </div>
  );
};

export default InfoSection2;
