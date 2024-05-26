import Header from "../../comonents/Header/Header";
import AppStore from "../../assets/icons/appStore.svg";
import Frame1 from "../../assets/icons/Frame1.svg";
import Frame2 from "../../assets/icons/Frame2.svg";
import Footer from "../../comonents/Footer";
import TextCarousel from "../../comonents/TextCarousel";

const ContentData = [
  {
    id: 1,
    title: "To Boost Your Career",
    content:
      "Get real english immersion and review call report feedback instantly",
  },
  {
    id: 2,
    title: "To Improve Your Daily Conversation",
    content:
      "Speak with AI Companions and practice with bite-sized, personalized lessons",
  },
];

const Home = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <div className="rounded-full absolute w-[997px] h-[997px] left-[882px] z-[-1] -top-[563px] bg-[#E5DFFF]" />
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <img className="w-[273px] absolute top-[221px] left-[919px]" src={Frame1} alt="" />
        <img className="w-[273px] absolute top-[152px] left-[1114px] z-10" src={Frame2} alt="" />
        <div className="mt-[128px] mx-[35px] border-b-[1px] border-[#BABDC3] mb-4 relative">
          <div className="ml-[24px] ">
            <div className="rounded-full absolute w-[664px] h-[630px] -left-[334px] z-[-1] top-[50px] bg-[#E5DFFF]" />
            <div className="text-[72px] font-['Poppins'] font-bold text-[#4D3380]  leading-[108px]">
              <div>An English Learning</div>
              <div>Role-Playing Game</div>
            </div>
            <div className="text-[40px] font-['Poppins'] font-medium text-[#08113F]  leading-[72px] mt-[37px] flex items-center">
              <span className="mr-[32px] flex-shrink-0">Play to ace your next</span>
              <TextCarousel />
            </div>
            <a href="https://apps.apple.com/us/app/instance-ai-english-practice/id6467774837" target="_blank" rel="noopener noreferrer">
              <div className="text-[24px] font-['DmSans'] font-normal text-[#000] leading-[24px] mt-[128px] mb-[18px]">
                Download our iOS app
              </div>
              <img className="w-[196px] mb-[44px]" src={AppStore} alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[109px] py-[94px]">
        {ContentData.map((item) => (
          <div className="w-[446px] relative" key={item.id}>
            <div className="absolute w-[73px] h-[69px] left-[-37px] z-[-2] -top-[24px]">
              <div className="rounded-full w-[73px] h-[69px] bg-[#E5DFFF] flex justify-center items-center" >
                <div className="rounded-full w-[58px] h-[55px] bg-[#D1C3F6]" />
              </div>
            </div>
            <div className="text-[22px] font-['DmSans'] font-bold text-[#0B3358]  leading-[140%] mb-[24px]">
              {item.title}
            </div>
            <div className="text-[18px] font-['DmSans'] font-normal text-[#08113F]  leading-[28px]">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
