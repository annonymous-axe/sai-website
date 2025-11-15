
import ParagraphCard from "./paraCard";
import Service from '../service/serviceSection';
import Sliders from "./sliders";
import KPISection from "./numbers";


function Home() {

  return (
    <>
      <Sliders />
      <ParagraphCard/>
      <Service />
      <KPISection />
    </>
  );
}

export default Home;
