const InfoSection3 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[700px] max-w-screen md:p-10 p-3 mt-[100px]">
      <div className="flex flex-col items-center justify-center text-gray-100 gap-5">
        <h3 className="text-4xl text-center">Why should you invest?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-200 gap-5 text-sm md:text-md w-full bg-white/10 p-5 rounded-xl">
        <h4 className="text-center">
          Ever sat down to calculate how much you spend on sharwama and
          icecream?
        </h4>
        <h4 className="text-center">Well the amount can quickly add up!</h4>
        <h4 className="text-center">
          {
            "At extraCash, you not only want to help you save, we want to see you grow. By investing with us, you are helping small businesses in your community while earning ROI. It's a win-win for every one."
          }
        </h4>
      </div>
    </div>
  );
};

export default InfoSection3;
