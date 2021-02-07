import HomeHero from "../../modules/HomeModules/HomeHero";
import Upcoming from "../../modules/HomeModules/UpComingEvents/UpComingEvents";
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
