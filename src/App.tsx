import { Header } from "./components/header/Header";
import { Selection } from "./components/selection/Selection";
import { Marquee } from "./components/marquee/Marquee";
import { InfoStudents } from "./components/info-students/InfoStudents";
import { Interactive } from "./components/interactive/Interactive";
import { Slogan } from "./components/slogan/Slogan";
import { Request } from "./components/request/Request";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Selection />
      <Marquee />
      <InfoStudents />
      <Interactive />
      <Slogan />
      <Request />
      <Footer />
    </>
  );
};
