const NavBar = () => {
  return (
    <div className="flex fixed items-center justify-between top-0 right-0 left-0 md:gap-10 gap-5 max-w-screen md:p-10 p-3 py-5 bg-black/80">
      <h3 className="text-green-500 font-bold text-2xl md:text-3xl">
        ExtraCash
      </h3>
      <div className="flex items-center justify-between w-full text-white">
        <h4 className="cursor-pointer hover:text-green-600">Home</h4>
        <h4 className="cursor-pointer hover:text-green-600">About</h4>
        <h4 className="cursor-pointer hover:text-green-600">News</h4>
        <h4 className="cursor-pointer hover:text-green-600">Earn</h4>
      </div>
    </div>
  );
};

export default NavBar;
