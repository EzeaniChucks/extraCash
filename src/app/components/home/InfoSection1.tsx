const InfoSection1 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[700px] md:p-10 p-3 pt-[70px] md:pt-20">
      <div className="flex flex-col items-center justify-center text-gray-100 gap-5">
        <h3 className="text-2xl">How does it work?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-200 gap-5 text-sm md:text-md w-full bg-white/10 p-5 rounded-xl">
        <h3 className="text-center">
          {
            "Earn guaranteed interest daily (up to 50% monthly) on your investment."
          }
        </h3>
        <h3 className="text-center">
          {
            "Your money is totally safe and withdrawable (after at least a week of initial investment)"
          }
        </h3>
        <h3 className="text-center">
          {
            "Unlike other investment platforms where you can lose your money, at extraCash, we manage your wealth from decades of experience working with and investing in financial instruments. We encourage you to invest your spare change. Instead of throwing it on a vanity item, you can make your money work for you instead."
          }
        </h3>
        <h3 className="text-center">
          {
            "Watch your money grow in real-time as you help us perform very simple online tasks within the app. You don't need to do more than just clicking on these tasks. No watching of adverts. No social media promotion. Just simple clicks to help us grow our SEO ranking on google"
          }
        </h3>
      </div>
    </div>
  );
};

export default InfoSection1;
