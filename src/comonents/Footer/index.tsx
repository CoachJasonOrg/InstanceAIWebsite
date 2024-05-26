import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <div className="h-[303px] flex flex-col justify-center items-center bg-[#F4F4F4]">
      <div className="flex justify-center items-center">
        <img src={Logo} className="w-[74px] h-[74px] mr-[17px]" alt="" />
        <span className="text-[32px] font-['DMSans'] font-medium text-[#3B2762] my-12">
          Instance AI
        </span>
      </div>
      <span className="text-[24px] font-['DMSans'] font-medium text-[#3B2762]">
        Contact Us
      </span>
      <span className="text-[20px] font-['DMSans'] font-medium text-[#3B2762] my-1">
        info@instanceai.pro
      </span>
    </div>
  );
};
export default Footer;
