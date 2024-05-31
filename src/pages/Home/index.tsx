import Header from "../../comonents/Header/Header";
import AppStore from "../../assets/icons/appStore.svg";
import Frame1 from "../../assets/icons/Frame1.svg";
import Frame2 from "../../assets/icons/Frame2.svg";
import Footer from "../../comonents/Footer";
import TextCarousel from "../../comonents/TextCarousel";
declare const gtag: any;
const ContentData = [
  {
    id: 1,
    title: "To Boost Your Career",
    content:
      "Conduct mock interviews, host meetings, and engage in small talk, all with instant feedback.",
  },
  {
    id: 2,
    title: "To Improve Your Daily Conversation",
    content:
      "Speak with AI companions and learn authentic expressions from bite-sized, personalized lessons",
  },
];

const Home = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <div className="hidden md:block rounded-full absolute w-[997px] h-[997px] right-[-370px] z-[-99] -top-[563px] bg-[#E5DFFF]" />
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <img className="hidden md:block w-[273px] absolute top-[221px] right-[320px] z-[-11]" src={Frame1} alt="" />
        <img className="hidden md:block w-[273px] absolute top-[152px] right-[126px] z-[-10]" src={Frame2} alt="" />
        <div className="mt-[128px] px-8 border-b-[1px] border-[#BABDC3] mb-4 relative w-screen">
          <div className="md:ml-6 ">
            <div className="rounded-full absolute w-72 h-72 -left-40 -top-20 md:w-[664px] md:h-[630px] md:-left-[334px] z-[-1] md:top-[50px] bg-[#E5DFFF]" />
            <div className="text-3xl md:text-[72px] font-['Poppins'] font-bold text-[#4D3380] md:leading-[108px]">
              <div>Your Personal English</div>
              <div>Speaking Coach</div>
            </div>
            <div className=" text-base md:text-[40px] font-['Poppins'] font-medium text-[#08113F] leading-6 md:leading-[72px] mt-[37px] flex items-center">
              <span className="mr-4 md:mr-8 flex-shrink-0">Play to ace your next</span>
              <TextCarousel />
            </div>
            <a href="https://apps.apple.com/app/apple-store/id6467774837?pt=126654624&ct=web&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                gtag('event', 'click', {
                  'event_category': 'App Downloads',
                  'event_label': 'iOS App Store Download'
                });
              }}>
              <div className="text-[24px] font-['DmSans'] font-normal text-[#000] leading-[24px] mt-[128px] mb-[18px]">
                Download our iOS app
              </div>
              <img className="w-[196px] mb-[44px]" src={AppStore} alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mx-10 md:px-[109px] pb-[96px]">
        {ContentData.map((item) => (
          <div className="w-[446px] relative mt-[94px]" key={item.id}>
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
