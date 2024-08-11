const InfoSection2 = () => {
  return (
    <div className="flex md:flex-row flex-col items-center md:items-end justify-center gap-5 w-full max-w-screen md:p-10 p-3 pt-[100px] md:pt-10">
      <div className="flex flex-col items-center justify-center text-white gap-5">
        <h3 className="text-4xl">What we do?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-50 gap-5 w-full bg-white/10 p-5 rounded-xl">
        <h3 className="text-center">
          {"We give you up to 3% guaranteed interest on your savings per week."}
        </h3>
        <h3 className="text-center">
          {"Your money is safe and withdrawable per week"}
        </h3>
        <h3 className="text-center">
          ExtraCash pools funds from investors and puts it into high yield
          short-term financial instruments. Our aim is build funds, support
          local businesses and return the ROI to our clients
        </h3>
        <h4 className="text-center">Well they can quickly add up!</h4>
        <h4 className="text-center">At extraCash, you want to help you </h4>
      </div>
    </div>
  );
};

export default InfoSection2;
