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
          ExtraMoneys pools funds from investors and puts it into low yield, low
          risk short-term financial instruments. Our aim is build funds, support
          local businesses and individuals by giving out loans and return the
          ROI to our clients
        </h3>
        <h4 className="text-center">Well they can quickly add up!</h4>
        <h4 className="text-center">At extraCash, you want to help you </h4>
      </div>
    </div>
  );
};

export default InfoSection2;
