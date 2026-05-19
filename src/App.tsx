import { Header } from "./components/header/Header";
import { Selection } from "./components/selection/Selection";
import { Marquee } from "./components/marquee/Marquee";
import { InfoStudents } from "./components/info-students/InfoStudents";
import { Request } from "./components/request/Request";
import { Footer } from "./components/footer/Footer";
import { Interactive } from "./components/interactive/Interactive";

export const App = () => {
  return (
    <>
      <Header />
      <Selection />
      <Marquee />
      <InfoStudents />
      <Interactive />
      <Request />
      <Footer />
    </>
  );
};
