const InfoSection1 = () => {
  return (
    <div className="flex md:flex-row flex-col items-center md:items-end justify-center gap-5 w-full max-w-screen md:p-10 p-3 pt-[50px] md:pt-5">
      <div className="flex flex-col items-center justify-center text-white gap-5">
        <h3 className="text-4xl">Your benefits?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-50 gap-5 w-full bg-white/10 p-5 rounded-xl">
        <h3 className="text-center">
          {
            "Earn to up 13% guaranteed interest every week (or 52% every month) on your investment."
          }
        </h3>
        <h3 className="text-center">
          {
            "Your money is safe and withdrawable every Monday (after at least a week of initial investment)"
          }
        </h3>
        <h3 className="text-center">
          {
            "We encourage you to invest only your spare change. If you invest N5000 for example, you get N1250 per week (or N5000 extra in a month)."
          }
        </h3>
        <h3 className="text-center">
          {
            "Watch your money grow in real-time within the app as you help us perform very simple online tasks within the app. You don't need to do more than just click on these tasks. No watching of adverts. No social media promotion. Just simple clicks to help us grow our SEO ranking on google"
          }
        </h3>
      </div>
    </div>
  );
};

export default InfoSection1;
