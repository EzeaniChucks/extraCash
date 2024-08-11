const InfoSection1 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full max-w-screen md:p-10 p-3 pt-[50px] md:pt-5">
      <div className="flex flex-col items-center justify-center text-gray-100 gap-5">
        <h3 className="text-4xl">Your benefits?</h3>
        <h3 className="w-[50px] h-1 bg-green-600 text-center rounded-xl"></h3>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-200 gap-5 text-sm md:text-md w-full bg-white/10 p-5 rounded-xl">
        <h3 className="text-center">
          {
            "Earn to up 13% guaranteed interest every week (or 52% every month) on your investment."
          }
        </h3>
        <h3 className="text-center">
          {
            "Your money is totally safe, withdrawable every Monday (after at least a week of initial investment)"
          }
        </h3>
        <h3 className="text-center">
          {
            "At extraMonies, we encourage you to invest your spare change. If you invest N10,000 for instance, you get N1300 per week (or N5200 extra in a month). On N20,000 you get N10,400 extra, and so on and so forth."
          }
        </h3>
        <h3 className="text-center">
          {
            "Watch your money grow in real-time within the app as you help us perform very simple online tasks within the app. You don't need to do more than just clicking on these tasks. No watching of adverts. No social media promotion. Just simple clicks to help us grow our SEO ranking on google"
          }
        </h3>
      </div>
    </div>
  );
};

export default InfoSection1;
