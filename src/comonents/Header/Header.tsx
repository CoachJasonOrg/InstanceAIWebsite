import Logo from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[22px] pt-[26px]">
      <div className="flex justify-center items-center">
        <img src={Logo} className="w-[74px] h-[74px] mr-[23px]" alt="" />
        <span className="text-[32px] font-['DMSans'] font-medium text-[#3B2762]">
          Instance
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-[20px] font-['DMSans'] font-medium text-[#000]">
          Product
        </span>
        <span className="text-[20px] font-['DMSans'] font-medium text-[#000] mx-[104px]">
          About
        </span>
        <span className="text-[20px] font-['DMSans'] font-medium text-[#000]">
          Blog
        </span>
      </div>
      <div className="w-[221px]"></div>
    </div>
  );
};

export default Header;
