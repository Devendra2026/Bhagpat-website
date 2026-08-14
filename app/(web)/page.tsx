import AnnouncementTicker from "@/components/home/AnnouncementTicker";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import CitizenServices from "@/components/home/CitizenServices";
import DigitalGateway from "@/components/home/DigitalGateway";
import HeroSlider from "@/components/home/HeroSlider";
import NewsAndNotices from "@/components/home/NewsAndNotices";
import Statistics from "@/components/home/Statistics";
import Galleryslider from "@/components/home/galleryslider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />
      <AnnouncementTicker />
      <div className="bg-gradient-flag">
        <DigitalGateway />
        <CitizenServices />
        <ChairmanMessage />
      </div>
      <Statistics />
      <NewsAndNotices />
      <Galleryslider />
    </div>
  );
}
