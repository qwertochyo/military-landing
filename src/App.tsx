import { Header } from "./components/header/Header";
import { Selection } from "./components/selection/Selection";
import { Marquee } from "./components/marquee/Marquee";
import { InfoStudents } from "./components/info-students/InfoStudents";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Selection />
      <Marquee />
      <InfoStudents />
      <Footer />
    </>
  );
};
