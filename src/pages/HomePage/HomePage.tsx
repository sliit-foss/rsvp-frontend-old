import HomeHero from "../../modules/HomeModules/HomeHero";
import Upcoming from "../../modules/HomeModules/UpComingEvents/UpComingEventsComponent";
import Partners from "../../modules/HomeModules/PartnersComponent/Partner";
import WhatWeDo from "../../modules/HomeModules/WhatWeDoComponent/WhatWeDo";
import MakeGoodThings from "../../modules/HomeModules/MakeGoodThings/MakeGoodThngs";

function HomePage() {
  return (
    <>
      <Upcoming />
      <MakeGoodThings />
      <HomeHero />
      <WhatWeDo />
      <Partners />
    </>
  );
}

export default HomePage;
