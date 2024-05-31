import Logo from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[22px] pt-[26px]">
      <div className="flex justify-center items-center">
        <img src={Logo} className="w-8 h-8 md:w-[4.75rem] md:h-[4.75rem] mr-1 md:mr-[23px] " alt="" />
        <span className="text-xl md:text-3xl font-['DMSans'] font-medium text-[#3B2762]">
          Instance AI
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-sm md:text-xl font-['DMSans'] font-medium text-[#000]">
          Product
        </span>
        <span className="text-sm md:text-xl font-['DMSans'] font-medium text-[#000] md:mx-[4.5rem] mx-[1rem]">
          About
        </span>
        <span className="text-sm md:text-xl font-['DMSans'] font-medium text-[#000]">
          Blog
        </span>
      </div>
      <div className="w-auto md:w-[221px]"></div>
    </div>
  );
};

export default Header;
