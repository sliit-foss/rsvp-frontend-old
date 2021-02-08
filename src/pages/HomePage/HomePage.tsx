import HomeHero from "../../modules/HomeModules/HomeHero";
import Upcoming from "../../modules/HomeModules/UpComingEvents/UpComingEventsComponent";
import Partners from "../../modules/HomeModules/PartnersComponent/Partner";

function HomePage() {
  return (
    <>
      <Upcoming />
      <HomeHero />
      <Partners />
    </>
  );
}

export default HomePage;
